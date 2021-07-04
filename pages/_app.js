import { AnimatePresence } from 'framer-motion';
import withDarkMode, { useDarkMode } from "next-dark-mode";
import '../scss/styles.scss'

const MyApp = ({ Component, pageProps, router }) => {
  const { darkModeActive } = useDarkMode();
  return (
    <AnimatePresence exitBeforeEnter>
      <div className={darkModeActive ? "darkMode" : "lightMode"}>
        <Component {...pageProps} key={router.route} />
      </div>
    </AnimatePresence>
  )
}

export default withDarkMode(MyApp);