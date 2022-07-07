import Link from 'next/link';
import style from './footer.module.css';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer_container}>
        <div>
          <p>
            {' '}
            &copy;{new Date().getFullYear()} Whichride - All rights reserved.
          </p>
        </div>

        <div>
          <Link href='/#'>
            <a>Privacy Policy</a>
          </Link>
          <Link href='/#'>
            <a>Terms and Conditions</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
