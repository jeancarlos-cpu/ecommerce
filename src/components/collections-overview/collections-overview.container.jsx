import { connect } from 'react-redux';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const mapStateToProps = state => ({
    loading: selectIsCollectionFetching(state)
});

const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

export default CollectionsOverviewContainer;