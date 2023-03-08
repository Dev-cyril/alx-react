import React from "react";
import { Stylesheet, css} from 'aphrodite'

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.body)}>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input className={css(styles.input)} type="email" name="email"></input>
          <label htmlFor="password">Password:</label>
          <input className={css(styles.input)} type="password" name="password"></input>
          <button>OK</button>
        </form>
      </div>
    </React.Fragment>
  );
}

const styles = Stylesheet.create({
  body: {
  fontSize: '1rem',
  padding: '2em',
  borderBottom: '3px solid #e0354b',
  height: '45%',

  '@media (max-width: 900px)': {
    display: 'flex',
    flexDirection: 'column',
  }
},

input: {
  margin: 10,
}

})
export default Login;
