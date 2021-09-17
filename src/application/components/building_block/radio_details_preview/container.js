import { connect } from "react-redux"
import RadioDetailsPreview from "./component"

const { selectRadiosDetails } = require("application/redux/actions/radios")

const mapStateToProps = (state) => ({
    isRadioSelected: state.radios.action.isSelected,
    selectedRadio: state.radios.action.selectedRadio
})

const mapDispatchToProps = dispatch => ({
    selectRadio: (payload) => dispatch(selectRadiosDetails(payload))
})


export default connect(
    mapStateToProps, mapDispatchToProps
)(RadioDetailsPreview)