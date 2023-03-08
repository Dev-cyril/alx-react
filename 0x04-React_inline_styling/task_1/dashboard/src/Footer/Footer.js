import React from "react";
import { Stylesheet, css} from 'aphrodite'
import { getFullYear, getFooterCopy } from "../utils/utils";

function Footer() {
  return (
    <>
      <div className={css(styles.footer)}>
        Copyright {getFullYear()} - {getFooterCopy()}
      </div>
    </>
  );
}

const styles = Stylesheet.create({
  footer: {
    fontSize: '1rem',
    padding: '1.2rem',
    textAlign: center,
    fontStyle: italic,
    borderTop:' 3px solid #e0354b',
  }

});
export default Footer;
