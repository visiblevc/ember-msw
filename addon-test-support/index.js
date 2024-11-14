import { setupWorker } from 'msw/browser';

let worker;

export function setupRequestMocking() {
  worker = setupWorker(...arguments);
}

export function setupRequestMockingTest(hooks) {
  hooks.before(async function () {
    await worker.start({
      onUnhandledRequest: 'error',
    });
  });
  hooks.afterEach(() => worker.resetHandlers());
}

export function getWorker() {
  return worker;
}
