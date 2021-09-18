import React, { Fragment } from 'react'
import * as Styled from './styles'
import { FontIcon } from 'application/components/controls'

const RadioHeader = ({ hideRadioDetails }) => {
    return <Fragment>
        <FontIcon onIconClick={hideRadioDetails} icon='arrow_back_ios' borderless />
        <Styled.HeaderHeadline>
            STATIONS
        </Styled.HeaderHeadline>
        <FontIcon icon='power_settings_new' borderless />
    </Fragment>
}

export default RadioHeader
