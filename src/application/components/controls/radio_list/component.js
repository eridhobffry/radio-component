import React, { Fragment } from 'react'
import * as Styled from './styles'

const RadioList = ({ radioName, radioFrequency, onRadioClick }) => {
    return <Fragment>
        <Styled.DiplayWrapper onClick={() => onRadioClick(radioName)}>
            <Styled.RadioName>
                {radioName}
            </Styled.RadioName>
            <Styled.RadioFrequency>
                {radioFrequency}
            </Styled.RadioFrequency>
        </Styled.DiplayWrapper>
    </Fragment>
}

export default RadioList
