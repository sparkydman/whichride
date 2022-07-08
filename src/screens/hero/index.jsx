import style from './hero.module.css';
import { useRef } from 'react';
import useFromTo from 'animations/use-from-to';

export default function Hero() {
  const ref = useRef(null);
  
  useFromTo({
    ref,
    targetElm: 'h1',
    fromOptions: { y: 40, opacity: 0 },
    toOptions: { y: 0, opacity: 1, duration: 2 },
  });
  
  useFromTo({
    ref,
    targetElm: 'p',
    fromOptions: { y: 50, opacity: 0, delay:1 },
    toOptions: { y: 0, opacity: 1, duration: 2 },
  });
  
  useFromTo({
    ref,
    targetElm: 'img',
    fromOptions: { y: 200, opacity: 0, delay:1 },
    toOptions: { y: 0, opacity: 1, duration: 3 },
  });

  return (
    <div className={style.hero} id='#' ref={ref}>
      <div className={style.hero_container}>
        <div className={style.hero_heading}>
          <div id='hero-header'>
            <h1>
              Compare & book <br /> ride-hailing providers{' '}
            </h1>
            <p>
              Save money and time with WhichrRide. <br /> Think Compare the
              market but for taxis.
            </p>
          </div>
        </div>
        <div className={style.hero_img_div} >
          <img src='/images/hero.png' alt='' />
        </div>
      </div>
    </div>
  );
}
