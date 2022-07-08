import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function useFromToTrigger({
  ref,
  targetElm,
  triggerElm,
  fromOptions,
  toOptions,
  isMultipleElms = false,
  triggerOptions = { start: 'top center', end: 'bottom center' },
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
        scrollTrigger: {
          trigger: elm.querySelector(triggerElm),
          ...triggerOptions,
        },
      }
    );
  }, []);
}
