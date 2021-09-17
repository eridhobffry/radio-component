import { RadioList } from 'application/components/controls'
import React, { Fragment } from 'react'

const RadioDetailsPreview = (props) => {
    const { radioImage, selectRadio } = props
    return <Fragment>
        <RadioList onRadioClick={selectRadio} {...props} />
    </Fragment>
}

export default RadioDetailsPreview
