import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import { Route } from 'react-router-dom';
import { firestore, convertSnapToMap } from '../../firebase/firebase.utils';
import CategoryPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CategoryPage);

const ShopPage = (props) => {
    const { match, updateCollections } = props;
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collections = convertSnapToMap(snapshot);
            updateCollections(collections);
            setLoading(false);
        });
    },
        []
    );

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>} />
            <Route path={`${match.path}/:categoryId`}  render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>} />
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
})

export default connect(null, mapDispatchToProps)(ShopPage);