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
      <AnimatePresence mode="wait">
        <motion.div key={router.route}>
          <motion.div
            style={{
              backgroundColor: "blue",
              position: "fixed",
              width: "100%",
              zIndex: 1000,
            }}
            transition={transitionSpringPhysics}
            initial={{ height: "100%", y: 0 }}
            animate={{ height: "100%", y: "-100%" }}
            // exit={{ height: "100%", y: 0 }}
          />
          <motion.div
            style={{
              backgroundColor: "blue",
              position: "fixed",
              width: "100%",
              zIndex: 1000,
            }}
            transition={transitionSpringPhysics}
            // initial={{ height: "100%", y: 0 }}
            animate={{ height: 0, y: "100vh" }}
            exit={{ height: "100%", y: 0 }}
          />

          <Navigation />

          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
