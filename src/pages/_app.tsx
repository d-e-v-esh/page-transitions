import Navigation from "@/components/navigation";
import "@/styles/globals.css";
import { AnimatePresence, motion, Spring } from "framer-motion";
import type { AppProps } from "next/app";

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  const transitionSpringPhysics: Spring = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };

  const transitionColor = "deepskyblue";

  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={router.route}>
          <motion.div
            style={{
              backgroundColor: transitionColor,
              position: "fixed",
              width: "100vw",
              zIndex: 1000,
              bottom: 0,
            }}
            transition={transitionSpringPhysics}
            animate={{ height: "0vh" }}
            exit={{ height: "100vh" }}
          />

          <motion.div
            style={{
              backgroundColor: transitionColor,
              position: "fixed",
              width: "100vw",
              zIndex: 1000,
              top: 0,
            }}
            transition={transitionSpringPhysics}
            initial={{ height: "100vh" }}
            animate={{ height: "0vh", transition: { delay: 0.2 } }}
          />

          <Navigation />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
