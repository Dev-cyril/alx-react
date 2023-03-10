import React, { Component } from 'react'

class BodySection extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div className='bodySection'>
                <h2>{this.props.title}</h2>
                {this.props.children}
            </div>
        );
    }
}

BodySection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};


export default BodySection