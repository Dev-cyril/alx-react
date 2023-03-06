import React, { Component } from 'react';
import bodySection from './BodySection';
import './BodySectionWithMarginBottom.css';

class bodySectionWithMargin extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='bodySectionWithMargin'>
                <bodySection {...this.props}/>
            </div>
        );
    }
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default bodySectionWithMargin