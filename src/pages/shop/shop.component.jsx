import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { Route } from 'react-router-dom';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import collectionContainer from '../collection/collection.container';


const ShopPage = (props) => {
    const { match, fetchCollectionsStart} = props;

    useEffect(() => {
        fetchCollectionsStart();
    },
        []
    );

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:categoryId`} component={collectionContainer} />
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);