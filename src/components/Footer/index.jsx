import { h } from "preact";
import Styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} Bofællesskabet Væksthuset
      <small className={Styles.byline}>
        en andelsboligforening tæt på Århus
      </small>
    </footer>
  );
}
export default Footer;
