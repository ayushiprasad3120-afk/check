"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem("visionovahq-cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    window.localStorage.setItem("visionovahq-cookie-consent", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 z-[70] mx-auto max-w-xl rounded-2xl glass shadow-soft p-5 md:p-6"
        >
          <p className="text-sm text-charcoal/80 dark:text-cream/80 leading-relaxed">
            We use cookies to improve your experience and analyze site traffic. By continuing, you agree to our use of cookies as described in our{" "}
            <a href="/privacy" className="underline underline-offset-2 hover:text-wine">
              Privacy Policy
            </a>
            .
          </p>
          <div className="mt-4 flex gap-3">
            <button
              onClick={accept}
              className="rounded-full bg-wine text-cream px-5 py-2 text-sm font-medium hover:bg-burgundy transition-colors"
            >
              Accept
            </button>
            <button
              onClick={() => setVisible(false)}
              className="rounded-full border border-charcoal/20 dark:border-cream/20 px-5 py-2 text-sm font-medium hover:border-wine hover:text-wine transition-colors"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
