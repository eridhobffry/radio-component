import { connect } from "react-redux"
import RadioFooter from "./component"

const mapStateToProps = (state) => ({
    isSelected: state.radios.action.isSelected,
    selectedRadioName: state.radios.action.selectedRadio
})

const mapDispatchToProps = {
    
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(RadioFooter)