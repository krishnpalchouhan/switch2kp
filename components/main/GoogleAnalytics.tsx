'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ReactGA from 'react-ga4';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID!;

const GoogleAnalytics = () => {
    const pathname = usePathname();

    useEffect(() => {
        if (GA_TRACKING_ID) {
            ReactGA.initialize(GA_TRACKING_ID);
            ReactGA.send({ hitType: 'pageview', page: pathname });
        }
    }, [pathname]);

    return null;
};

export default GoogleAnalytics;
