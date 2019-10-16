import React from 'react';
import './custom-button.styles.scss';

const CustomButtom = ({ children, inverted, grow, ...otherProps }) => (
    <button className={`
    ${inverted ? 'inverted' : ''}
    ${grow ? 'grow' : ''} 
    custom-button
    `} {...otherProps}>
        {children}
    </button>
);

export default CustomButtom;