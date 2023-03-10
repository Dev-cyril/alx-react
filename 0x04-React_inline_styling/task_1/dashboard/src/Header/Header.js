import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { Stylesheet, css} from 'aphrodite'

function Header() {
  return (
    <>
      <div className={css(styles.header)}>
        <img src={logo} className={css(styles.img)}alt="logo" />
        <h1>School dashboard</h1>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
  fontSize: '1.4rem',
  color: '#e0354b',
  display: flex,
  alignItems: center,
  borderBottom: '3px solid #e0354b',
},

img: {
  width: 200,
  height: 200,
}
})
export default Header;
