import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent } from './gtm';

export const usePageTracking = () => {
    const location = useLocation();

    useEffect(() => {
        trackEvent('page_view', {
            page_path: location.pathname,
            page_title: document.title,
        });
    }, [location.pathname]);
};
