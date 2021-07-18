import { AnimatePresence } from 'framer-motion';
import withDarkMode, { useDarkMode } from 'next-dark-mode';
import { SmoothScrollProvider } from '../components/scroll';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag';
import '../scss/styles.scss';

const MyApp = ({ Component, pageProps }) => {
  const { darkModeActive } = useDarkMode();
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <AnimatePresence exitBeforeEnter>
      <div className={darkModeActive ? 'darkMode' : 'lightMode'}>
        <SmoothScrollProvider
          options={{ smooth: true, smoothMobile: true, lerp: 0.1 }}
        >
          <Component {...pageProps} key={router.route} />
        </SmoothScrollProvider>
      </div>
    </AnimatePresence>
  );
};

export default withDarkMode(MyApp);
