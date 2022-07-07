import style from './hero.module.css';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const elm = ref.current;
    gsap.fromTo(
      elm.querySelector('h1'),
      {
        y: 40,
        opacity:0
      },
      {
        y: 0,
        opacity:1,
        duration: 2,
      }
    );
    gsap.fromTo(
      elm.querySelector('p'),
      {
        y: 50,
        opacity:0,
        delay:1
      },
      {
        y: 0,
        opacity:1,
        duration: 2,
      }
    );
    gsap.fromTo(
      elm.querySelector('img'),
      {
        y: 200,
        opacity: 0,
        delay: 1,
      },
      {
        y: 0,
        opacity: 1,
        duration: 3,
      }
    );
  }, []);

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
