import style from './about.module.css';
import Image from 'next/image';;
import {  useRef } from 'react';
import useFromToTrigger from 'animations/use-from-to-trigger';
import useFromTo from 'animations/use-from-to';

export default function AboutUs() {
  const ref = useRef(null);

  useFromTo({
    ref,
    targetElm: 'h1',
    fromOptions: { y: 40, opacity: 0 },
    toOptions: { y: 0, opacity: 1, duration: 2 },
  });

  useFromToTrigger({
    ref,
    targetElm: '.left-side',
    triggerElm: 'h1',
    fromOptions: { x: -200, opacity: 0 },
    toOptions: { x: 0, opacity: 1, duration: 2 },
    isMultipleElms: true,
  });

  useFromToTrigger({
    ref,
    targetElm: '.right-side',
    triggerElm: 'h1',
    fromOptions: { x: 200, opacity: 0, delay: 1 },
    toOptions: { x: 0, opacity: 1, duration: 3 },
    isMultipleElms: true,
  });

  return (
    <div className={style.about} id='about-us' ref={ref}>
      <div className={style.about_bg}>
        <div></div>
        <div></div>
      </div>
      <div className={style.about_container} id='container'>
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
