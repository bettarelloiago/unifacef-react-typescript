import { configureScope, init } from '@sentry/browser';

(() => {

    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return;
    }

    const { REACT_APP_SENTRY_SDN } = process.env;

    init({dsn: REACT_APP_SENTRY_SDN});

    configureScope(scope => {
    });
})();