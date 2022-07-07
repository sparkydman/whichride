import Image from 'next/image';
import Link from 'next/link';
import style from './navigation.module.css';

export default function Navigation() {
  return (
    <nav className={style.nav_main}>
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
        <div className={style.menu_div}>
          <span className={style.menu}></span>
        </div>
      </div>
      <div></div>
    </nav>
  );
}
