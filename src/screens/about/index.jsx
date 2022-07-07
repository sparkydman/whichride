import style from './about.module.css';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

export default function AboutUs() {
    gsap.registerPlugin(ScrollTrigger)
  const ref = useRef(null)

  useEffect(()=>{
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
      elm.querySelectorAll('.left-side'),
      {
        x: -200,
        opacity:0,
      },
      {
        x: 0,
        opacity:1,
        duration: 2,
        scrollTrigger: {
          trigger: elm.querySelector('h1'),
          start: 'top center',
          end: 'bottom center',
        },
      }
    );
    gsap.fromTo(
      elm.querySelectorAll('.right-side'),
      {
        x: 200,
        opacity: 0,
        delay: 1,
      },
      {
        x: 0,
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: elm.querySelector('h1'),
          start: 'top center',
          end: 'bottom center',
        },
      }
    );
  },[])

  return (
    <div className={style.about} id='about-us' ref={ref}>
      <div className={style.about_bg}>
        <div></div>
        <div></div>
      </div>
      <div className={style.about_container} id="container">
        <h1 className={style.about_heading}>Why Whichride</h1>
        <div className={style.about_list_div}>
          <ul className={style.about_list}>
            <li className={`${style.about_item} left-side`}>
              <div className={style.about_item_div}>
                <span>
                  <Image src='/svgs/car.svg' height={32} width={36} alt='' />
                </span>
                <h3>More choices</h3>
                <p>
                  WhichRide lets you compare pricing across the major rideshares
                  so you can save money on every ride.
                </p>
              </div>
            </li>
            <li className={`${style.about_item} right-side`}>
              <div className={style.about_item_div}>
                <span>
                  <Image
                    src='/svgs/options.svg'
                    height={32}
                    width={36}
                    alt=''
                  />
                </span>
                <h3>More choices</h3>
                <p>
                  WhichRide lets you compare pricing across the major rideshares
                  so you can save money on every ride.
                </p>
              </div>
            </li>
            <li className={`${style.about_item} left-side`}>
              <div className={style.about_item_div}>
                <span>
                  <Image src='/svgs/watch.svg' height={32} width={36} alt='' />
                </span>
                <h3>More choices</h3>
                <p>
                  WhichRide lets you compare pricing across the major rideshares
                  so you can save money on every ride.
                </p>
              </div>
            </li>
            <li className={`${style.about_item} right-side`}>
              <div className={style.about_item_div}>
                <span>
                  <Image src='/svgs/safety.svg' height={32} width={36} alt='' />
                </span>
                <h3>Safety first</h3>
                <p>
                  WhichRide lets you compare pricing across the major rideshares
                  so you can save money on every ride.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
