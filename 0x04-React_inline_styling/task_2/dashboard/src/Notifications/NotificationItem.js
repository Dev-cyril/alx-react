import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";

class NotificationItem extends Component {
  render (){
    const { type, html, value, id, markAsRead } = this.props
    return (
      <>
        {type && value ? <li onClick={() => markAsRead(id)} data-notification-type={type} className={type === 'default' ? css(styles.default) :
        css(styles.urgent)}>{value}</li> : null}
        {html ? <li onClick={() => markAsRead(id)} className={css(styles.urgent)} data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
      </>
    );
  }
}

const styles = Stylesheet.create({
  default: {
    color: 'blue',
  },

  urgent: {
    color: 'red',
  },
})
NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {
    console.log("empty func");
  },
  id: 0,
};

export default NotificationItem;
