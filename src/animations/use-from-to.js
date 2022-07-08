import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function useFromTo({
  ref,
  targetElm,
  fromOptions,
  toOptions,
  isMultipleElms = false,
}) {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const elm = ref.current;
    gsap.fromTo(
      isMultipleElms
        ? elm.querySelectorAll(targetElm)
        : elm.querySelector(targetElm),
      fromOptions,
      {
        ...toOptions,
      }
    );
  }, []);
}
