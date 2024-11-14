import { visit } from '@ember/test-helpers';
import { getWorker, setupRequestMockingTest } from 'ember-msw/test-support';
import { setupApplicationTest } from 'ember-qunit';
import { http } from 'msw';
import { module, test } from 'qunit';

module('Acceptance | REST', function (hooks) {
  setupApplicationTest(hooks);
  setupRequestMockingTest(hooks);

  test('mocking a REST API', async function (assert) {
    const worker = getWorker();

    worker.use(
      http.get('/people', () => {
        return new Response(
          JSON.stringify({
            people: [
              {
                name: 'Jane Doe',
                email: 'jane@example.com',
              },
              {
                name: 'John Doe',
                email: 'jane@example.com',
              },
            ],
          }),
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
      }),
    );

    await visit('/');

    assert.dom('#response-status').hasText('200');
    assert.dom('#people li').exists({ count: 2 });
  });

  test('request handlers are reset between test runs', async function (assert) {
    await visit('/');

    assert.dom('#response-status').hasText('500');
  });
});
