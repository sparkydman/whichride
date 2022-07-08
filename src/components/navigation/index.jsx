import { mdiClose, mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import style from './navigation.module.css';
import { gsap } from 'gsap';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [wasOpen, setWasOpen] = useState(false);
  const ref = useRef(null);
  const onToggle = () => setOpen(!open);

  useEffect(() => {
    const elm = ref.current;
    if (open) {
      gsap.fromTo(
        elm.querySelector('#drawer'),
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
        }
      );
      setWasOpen(true);
    }
    if (!open && wasOpen) {
      gsap.fromTo(
        elm.querySelector('#drawer'),
        {
          y: 0,
          opacity: 1,
        },
        {
          y: -100,
          opacity: 0,
          duration: 2,
        }
      );
      setWasOpen(false);
    }
  }, [open, wasOpen]);

  return (
    <nav className={style.nav_main} ref={ref}>
      <div className={style.nav_container}>
        <Link href='/#home'>
          <a className={style.nav_logo}>
            <Image src='/logo.svg' alt='logo' width={200} height={60} />
          </a>
        </Link>
        <ul className={style.nav_menu}>
          <li className={style.nav_menu_item}>
            <Link href='/#app'>
              <a className={style.nav_menu_item_link}>The App</a>
            </Link>
          </li>
          <li className={style.nav_menu_item}>
            <Link href='/#about-us'>
              <a className={style.nav_menu_item_link}>About us</a>
            </Link>
          </li>
          <li className={style.nav_menu_item}>
            <Link href='/#contact'>
              <a className={style.nav_menu_item_link}>Get in Touch</a>
            </Link>
          </li>
        </ul>
        {!open && (
          <button onClick={() => onToggle()} className={style.menu_btn}>
            <Icon path={mdiMenu} className='svg-icon' />
          </button>
        )}
      </div>

      <div
        className={style.drawer}
        id='drawer'
        style={{ top: open ? 0 : -100 }}
      >
        <div className={style.drawer_div}>
          <button onClick={() => onToggle()} className={style.drawer_btn}>
            <Icon path={mdiClose} className='svg-icon' />
          </button>
          <ul className={style.drawer_menu}>
            <li className={style.nav_menu_item}>
              <Link href='/#app'>
                <a
                  onClick={() => onToggle()}
                  className={style.nav_menu_item_link}
                >
                  The App
                </a>
              </Link>
            </li>
            <li className={style.nav_menu_item}>
              <Link href='/#about-us'>
                <a
                  onClick={() => onToggle()}
                  className={style.nav_menu_item_link}
                >
                  About us
                </a>
              </Link>
            </li>
            <li className={style.nav_menu_item}>
              <Link href='/#contact'>
                <a
                  onClick={() => onToggle()}
                  className={style.nav_menu_item_link}
                >
                  Get in Touch
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
