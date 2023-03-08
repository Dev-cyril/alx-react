import React from "react";
import PropTypes from "prop-types";
import { Stylesheet, css } from 'aphrodite';


function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr style={rowStyle} className={isHeader ? css(styles.header) : css(styles.deault)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2} className={css(styles.th)}>{textFirstCell}</th>
        ) : (
          <>
              <th className={css(styles.th)} style={headerStyle}>{textFirstCell}</th>
              <th className={css(styles.th)} style={headerStyle}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}


const styles = Stylesheet.create({
  default: {
    backgroundColor: "#f5f5f5ab",
  },
  header: {
    backgroundColor: "#deb5b545",
  },

  th: {
    borderBottom: '1px solid #ddd',
    width: '80%',
  },
});
CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
