import Navigation from "@/components/navigation";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  const transitionSpringPhysics = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };

  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={router.route}>
          <motion.div
            style={{
              backgroundColor: "red",
              position: "fixed",
              width: "100vw",
              zIndex: 1000,
            }}
            transition={transitionSpringPhysics}
            // initial={{ height: "100vh", y: "0vh" }}
            animate={{ height: "0vh", y: "100vh" }}
            exit={{ height: "100vh", y: "0vh" }}
          />

          {/* The entering child will wait until the exiting child has animated out */}

          {/* at first, the exiting child has to animate out with the old page, once that is done only then the new page can be animated in with the entering child*/}

          <motion.div
            style={{
              backgroundColor: "blue",
              position: "fixed",
              width: "100vw",
              zIndex: 1000,
            }}
            transition={transitionSpringPhysics}
            initial={{ height: "100vh", y: "0vh" }}
            animate={{ height: "100vh", y: "-100vh" }}
            // exit={{ height: "100vh", y: "0vh" }}
          />

          <Navigation />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
