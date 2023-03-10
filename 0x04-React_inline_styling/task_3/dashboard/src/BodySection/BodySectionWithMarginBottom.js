import React, { Component } from 'react';
import BodySection from './BodySection';
import { Stylesheet, css } from 'aphrodite'

class bodySectionWithMargin extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={css(styles.bodySectionWithMargin)}>
                <BodySection {...this.props}/>
            </div>
        );
    }
}


const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px',
    }
});

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default bodySectionWithMargin