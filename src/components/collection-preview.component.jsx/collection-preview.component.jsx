import React from 'react';
import './preview-collection.styles.scss';

const collectionPreview = ({ title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'></div>
    </div>
)