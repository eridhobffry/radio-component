import React, { Fragment } from 'react'
import * as Styled from './styles'
import { FontIcon } from 'application/components/controls'
import { withTheme } from 'styled-components'

const RadioHeader = ({ hideRadioDetails, theme }) => {
    return <Fragment>
        <FontIcon onIconClick={hideRadioDetails} color={theme.color.color15} icon='arrow_back_ios' borderless />
        <Styled.HeaderHeadline>
            STATIONS
        </Styled.HeaderHeadline>
        <FontIcon icon='power_settings_new' color={theme.color.color15} borderless />
    </Fragment>
}

export default withTheme(RadioHeader)
