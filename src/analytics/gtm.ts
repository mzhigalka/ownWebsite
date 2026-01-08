const GTM_ID = process.env.REACT_APP_GTM_ID;

export const isGtmEnabled = Boolean(GTM_ID);

export const initGtm = () => {
    if (!GTM_ID || typeof document === 'undefined') {
        return;
    }

    if (document.getElementById('gtm-script')) {
        return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'gtm.js',
        'gtm.start': new Date().getTime(),
    });

    const script = document.createElement('script');
    script.id = 'gtm-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(script);
};

type EventParams = Record<string, unknown>;

export const trackEvent = (event: string, params: EventParams = {}) => {
    if (!GTM_ID) {
        return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event,
        ...params,
    });
};
