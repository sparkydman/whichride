import style from './app.module.css';
import { useRef } from 'react';
import useFromTo from 'animations/use-from-to';
import useFromToTrigger from 'animations/use-from-to-trigger';

export default function AppUsage() {
  const ref = useRef(null)

    useFromTo({
      ref,
      targetElm: 'h2',
      fromOptions: { y: 40, opacity: 0 },
      toOptions: { y: 0, opacity: 1, duration: 2 },
    });

    useFromTo({
      ref,
      targetElm: 'p',
      fromOptions: { y: 50, opacity: 0 },
      toOptions: { y: 0, opacity: 1, duration: 2 },
    });

    useFromToTrigger({
      ref,
      targetElm: 'img',
      triggerElm: 'p',
      fromOptions: { x: -100, opacity: 0 },
      toOptions: { x: 0, opacity: 1, duration: 2 },
    });

    useFromToTrigger({
      ref,
      targetElm: 'li:nth-child(1)',
      triggerElm: 'p',
      fromOptions: { x: 200, opacity: 0 },
      toOptions: { x: 0, opacity: 1, duration: 2 },
    });

    useFromToTrigger({
      ref,
      targetElm: 'li:nth-child(2)',
      triggerElm: 'li:nth-child(1)',
      fromOptions: { x: 200, opacity: 0, delay: 1 },
      toOptions: { x: 0, opacity: 1, duration: 3 },
    });

    useFromToTrigger({
      ref,
      targetElm: 'li:nth-child(3)',
      triggerElm: 'li:nth-child(2)',
      fromOptions: { x: 200, opacity: 0, delay: 2 },
      toOptions: { x: 0, opacity: 1, duration: 4 },
    });

  
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
