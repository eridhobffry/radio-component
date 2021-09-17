import { getRadiosDetailsRequest } from "application/redux/actions/radios"
import { connect } from "react-redux"
import MainComponent from "./component"

const mapStateToProps = (state) => ({
    radiosDataLoaded: state.radios.succeed,
    radios: state.radios.payload,
})

const mapDispatchToProps = dispatch => ({
    getRadiosRequest: () => dispatch(getRadiosDetailsRequest())
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(MainComponent)