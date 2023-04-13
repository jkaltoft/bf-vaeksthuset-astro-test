import { h } from "preact";
import Styles from "./styles.module.scss";

function Nav() {
  return (
    <nav className={Styles.nav}>
      <a className={Styles.logolink} href="/">
        <div className={Styles.monogram}>JW</div>
      </a>
      <a className={Styles.link} href="/projects">
        Portfolio
      </a>
      <a className={Styles.link} href="/about">
        About
      </a>
      <a className={Styles.link} href="/my-page">
        My page
      </a>
      <a className={Styles.social} href="https://twitter.com/me">
        <svg
          className={Styles.socialicon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
        </svg>
      </a>
      <a className={Styles.social} href="https://github.com/me">
        <svg
          className={Styles.socialicon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </a>
      <a className={Styles.social} href="https://dev.to/me">
        <svg
          className={Styles.socialicon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 40"
          style="enable-background:new 0 0 50 40"
          xmlSpace="preserve"
        >
          <path d="M15.7 15.5c-.4-.3-.7-.4-1.1-.4h-1.7v10.1h1.7c.4 0 .8-.1 1.1-.4.4-.3.6-.7.6-1.3v-6.7c0-.6-.2-1-.6-1.3z" />
          <path d="M47 0H3C1.3 0 0 1.3 0 3v34c0 1.7 1.3 3 3 3h44c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zM19.1 23.5c0 1.3-.4 2.4-1.3 3.2-.8.9-1.9 1.3-3.3 1.3h-4.4V12.3h4.5c1.3 0 2.4.4 3.2 1.3.8.8 1.3 1.9 1.3 3.2v6.7zm9.1-8.4h-5.1v3.6h3.1v2.8h-3.1v3.7h5.1V28h-5.9c-.6 0-1-.2-1.4-.6-.4-.4-.6-.8-.6-1.4V14.2c0-.6.2-1 .6-1.4.4-.4.8-.6 1.4-.6h5.9v2.9zM37.5 26c-.6 1.3-1.3 2-2.2 2-.9 0-1.7-.7-2.2-2l-3.7-13.8h3.1L35.3 23l2.8-10.8h3.1L37.5 26z" />
        </svg>
      </a>
    </nav>
  );
}
export default Nav;
