import type { AppProps } from 'next/app';
import GoogleAnalytics from "@/components/main/GoogleAnalytics";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GoogleAnalytics />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
