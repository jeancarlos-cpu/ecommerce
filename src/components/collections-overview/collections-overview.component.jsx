import React from 'react';
import {connect} from 'react-redux';
import {selectCollections} from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component'


const CollectionsOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
            {
                collections.map(({ id, ...otherProps }) => (
                    <CollectionPreview
                        key={id}
                        {...otherProps}
                    />
                ))
            }
        </div>
    )
};

const mapStateToProps = state => ({
    collections: selectCollections(state)
})

export default connect(mapStateToProps)(CollectionsOverview);


