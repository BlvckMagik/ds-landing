"use client";

import { Fragment } from "react";
import {
  Disclosure as DisclosureComponent,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AnimatePresence, easeOut, motion } from "framer-motion";

const Disclosure: React.FC<{
  title: string;
  content: string;
  setIsHintUsed: () => void;
}> = ({ title, content, setIsHintUsed }) => {
  const onClick = () => {
    setIsHintUsed();
    localStorage.setItem("isHintUsed", "true");
  };
  return (
    <DisclosureComponent
      as="div"
      className="relative w-full max-w-md py-4"
      onClick={() => !localStorage.getItem("isHintUsed") && onClick()}
    >
      {({ open }) => (
        <>
          <DisclosureButton className="w-full border-b pb-2 text-center font-semibold">
            {title}
          </DisclosureButton>
          <div className="overflow-hidden py-2">
            <AnimatePresence>
              {open && (
                <DisclosurePanel static as={Fragment}>
                  <motion.div
                    initial={{ opacity: 0, y: -24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.2, ease: easeOut }}
                    className="origin-top"
                    style={{ textAlign: "center" }}
                  >
                    {content}
                  </motion.div>
                </DisclosurePanel>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </DisclosureComponent>
  );
};

export default Disclosure;
