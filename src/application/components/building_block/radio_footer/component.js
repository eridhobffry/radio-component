import React, { Fragment } from 'react'
import * as Styled from './styles'

const RadioFooter = ({isSelected, selectedRadioName}) => {
    return isSelected ? <Styled.FooterWrapper>
        <Styled.FooterHeadline>
            CURRENTLY PLAYING
        </Styled.FooterHeadline>
        <Styled.FooterSelectedRadioName>
            {selectedRadioName}
        </Styled.FooterSelectedRadioName>
    </Styled.FooterWrapper> : <Fragment />
}

export default RadioFooter
