import { AnimatePresence } from 'framer-motion';
import withDarkMode, { useDarkMode } from 'next-dark-mode';
import { SmoothScrollProvider } from '../components/scroll';
import '../scss/styles.scss';

const MyApp = ({ Component, pageProps, router }) => {
  const { darkModeActive } = useDarkMode();
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
