ember-msw
==============================================================================

Integrates Ember with [MSW](https://mswjs.io/) and provides test helpers.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.20 or above
* Ember CLI v3.20 or above
* Node.js v12 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-msw
```

**Installation notes:**

- MSW is a dependency and does not need to be installed separately
- The addon hosts [mockServiceWorker.js](https://github.com/visiblevc/ember-msw/blob/main/public/mockServiceWorker.js), so you don't need to generate one in your app

Usage
------------------------------------------------------------------------------

### Setup

Steps to use the provided test helpers:

1. Call `setupRequestMocking` in your test-helper.js

```js
# tests/test-helper.js

// ...
import { setupRequestMocking } from 'ember-msw/test-support';  // <---
// ...

setApplication(Application.create(config.APP));

setup(QUnit.assert);

setupRequestMocking();  // <---

start();
```

2. Use the `setupRequestMockingTest` and `getWorker` in your tests: [see example](https://github.com/visiblevc/ember-msw/blob/main/tests/acceptance/rest-test.js).

### Providing options to `setupWorker`

All argument to `setupRequestMocking` are forwarded to MSW's `setupWorker`:

```js
# tests/test-helper.js

setupRequestMocking(
  rest.get('/assets/*', () => {}) // Pass through requests to /assets/*
);
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
