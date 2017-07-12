import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions/actions';
import Footer from '../components/footer';

const mapStateToProps = ({visibilityFilter}) => {
	return {
		visibilityFilter
	}
};

const mapDispatchToProp = (dispatch) => {
	return {
		setVisibilityFilterCallback : (filter) => {
			dispatch(setVisibilityFilter(filter))
		}
	}
};

let FooterContainer = connect(mapStateToProps,mapDispatchToProp)(Footer);

export default FooterContainer;