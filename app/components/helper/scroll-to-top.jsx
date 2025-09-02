"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { safeWindow } from "@/utils/safeDom";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS + " hidden");

  useEffect(() => {
    if (!safeWindow) return; // ✅ SSR guard

    const handleScroll = () => {
      if (safeWindow.scrollY > SCROLL_THRESHOLD) {
        setBtnCls(DEFAULT_BTN_CLS);
      } else {
        setBtnCls(DEFAULT_BTN_CLS + " hidden");
      }
    };

    safeWindow.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // refresh pe bhi check ho jaye

    return () => {
      safeWindow.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClickBtn = () =>
    safeWindow?.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button className={btnCls} onClick={onClickBtn} aria-label="Scroll to top">
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
