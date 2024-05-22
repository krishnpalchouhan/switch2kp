// lib/gtag.ts
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your GA Tracking ID

// Standard Google Analytics tracking script
export const pageview = (url: string) => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    });
};

export const event = ({ action, category, label, value }: { action: string; category: string; label: string; value: number }) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};
