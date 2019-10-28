import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import { Route } from 'react-router-dom';
import CategoryPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CategoryPage);

const ShopPage = (props) => {
    const { match, fetchCollectionsStartAsync, loading } = props;


    useEffect(() => {
        fetchCollectionsStartAsync();
    },
        []
    );

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
            <Route path={`${match.path}/:categoryId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
        </div>
    )
};

const mapStateToProps = state => ({
    loading: selectIsCollectionFetching(state)
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);