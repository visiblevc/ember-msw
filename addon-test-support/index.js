import { setupWorker } from 'msw';

let worker;

export function setupRequestMocking() {
  worker = setupWorker();
}

export function setupRequestMockingTest(hooks) {
  hooks.beforeEach(async function () {
    await worker.start({
      onUnhandledRequest: 'error',
    });
  });
  hooks.afterEach(() => worker.resetHandlers());
}

export function getWorker() {
  return worker;
}
