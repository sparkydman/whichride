import style from './app.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

export default function AppUsage() {
  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef(null)

  useEffect(()=>{
    const elm = ref.current;

    gsap.fromTo(
       elm.querySelector('h2'),
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
        x: -100,
        opacity:0,
      },
      {
        x: 0,
        opacity:1,
        duration: 2,
        scrollTrigger: {
          trigger: elm.querySelector('p'),
          start: 'top center',
          end: 'bottom center',
        },
      }
    );
    gsap.fromTo(
      elm.querySelector('li:nth-child(1)'),
      {
        x: 200,
        opacity:0,
      },
      {
        x: 0,
        opacity:1,
        duration: 2,
        scrollTrigger: {
          trigger: elm.querySelector('p'),
          start: 'top center',
          end: 'bottom center',
        },
      }
    );
    gsap.fromTo(
      elm.querySelector('li:nth-child(2)'),
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
          trigger: elm.querySelector('li:nth-child(1)'),
          start: 'top center',
          end: 'bottom center',
        },
      }
    );
    gsap.fromTo(
      elm.querySelector('li:nth-child(3)'),
      {
        x: 200,
        opacity:0,
        delay: 2,
      },
      {
        x: 0,
        opacity:1,
        duration: 4,
        scrollTrigger: {
          trigger: elm.querySelector('li:nth-child(2)'),
          start: 'top center',
          end: 'bottom center',
        },
      }
    );
  },[])
  
  return (
    <div className={style.app} id='app' ref={ref}>
      <div className={style.app_container}>
        <div className={style.app_heading} >
          <div>
            <h2>
              Whichride brings together multiple ride hailing providers and
              local taxi firms in one app
            </h2>
            <p>
              Allowing riders to select the provider that offers the best price,
              service or travel time, then seamlessly book within the app
            </p>
          </div>
        </div>
        <div className={style.app_info} id='info-trigger'>
          <div className={style.app_img_div}>
            <img src='/images/phone.png' alt='' />
          </div>
          <div className={style.app_info_div}>
            <div>
              <ul className={style.app_info_list}>
                <li className={style.app_info_item}>
                  <div className={style.app_info_point}>
                    <span className={style.active}>
                      <span>Step 1</span>
                    </span>
                  </div>
                  <div className={style.app_info_detail}>
                    <div>
                      <h3>Enter location</h3>
                      <p>
                        Enter your destination to see a list of taxi providers
                        near you.
                      </p>
                    </div>
                  </div>
                </li>
                <li className={style.app_info_item}>
                  <div className={style.app_info_point}>
                    <span>
                      <span>Step 2</span>
                    </span>
                  </div>
                  <div className={style.app_info_detail}>
                    <div>
                      <h3>Find the perfect ride</h3>
                      <p>
                        Filter results by driver rating, driver sex, waiting
                        times, price or speed. Reduce carbon footprint by only
                        showing hybrid or electric cars.
                      </p>
                    </div>
                  </div>
                </li>
                <li className={style.app_info_item}>
                  <div className={style.app_info_point}>
                    <span>
                      <span>Step 2</span>
                    </span>
                  </div>
                  <div className={style.app_info_detail}>
                    <div>
                      <h3>Pay and Save</h3>
                      <p>
                        Once you select a ride, we search the web for coupons to
                        get you an even better deal, then book seemlessly within
                        our app and earn points while you ride.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
