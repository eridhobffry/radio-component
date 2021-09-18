import { connect } from "react-redux"
import RadioHeader from './component'
import { hideRadiosDetails } from 'application/redux/actions/radios'

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    hideRadioDetails: () => dispatch(hideRadiosDetails())
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(RadioHeader)