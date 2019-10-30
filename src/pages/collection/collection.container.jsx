import { connect } from 'react-redux';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import CategoryPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const mapStateToProps = state => ({
    loading: !selectIsCollectionFetching(state)
});

const collectionContainer = connect(mapStateToProps)(WithSpinner(CategoryPage));

export default collectionContainer;