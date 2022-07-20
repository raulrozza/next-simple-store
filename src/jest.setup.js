// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

global.ResizeObserver = class ResizeObserver {
    constructor(cb) {
        this.cb = cb;
    }

    observe() {
        this.cb([{ borderBoxSize: { inlineSize: 0, blockSize: 0 } }]);
    }

    unobserve() {}
};

global.DOMRect = {
    fromRect: () => ({
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: 0,
        height: 0,
    }),
};
