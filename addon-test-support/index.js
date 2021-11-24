import { setupWorker } from 'msw';

let worker;

export function setupRequestMocking() {
  worker = setupWorker(...arguments);
}

export function setupRequestMockingTest(hooks) {
  hooks.before(async function () {
    await worker.start({
      onUnhandledRequest: 'error',
    });

    // https://github.com/mswjs/msw/issues/854
    await new Promise((resolve) => setTimeout(resolve, 50));
  });
  hooks.afterEach(() => worker.resetHandlers());
}

export function getWorker() {
  return worker;
}
