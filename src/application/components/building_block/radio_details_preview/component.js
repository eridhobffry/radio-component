import { FontIcon, ImagePlaceholder, RadioList } from 'application/components/controls'
import React, { Fragment } from 'react'
import { withTheme } from 'styled-components'
import * as Styled from './styles'

const RadioDetailsPreview = (props) => {
    const { radioImage, selectRadio, isSelected, theme, radioName, selectedRadio } = props
    return <Fragment>
        <Styled.RadioDetailsContainer>
            {
                isSelected && selectedRadio === radioName &&
                <Styled.RadioImageWrapper>
                    <FontIcon color={theme.color.color15} icon='add_circle_outline' borderless />
                    <ImagePlaceholder
                        source={radioImage}
                    />
                    <FontIcon color={theme.color.color15} icon='remove_circle_outline' borderless />
                </Styled.RadioImageWrapper>
            }
            <RadioList onRadioClick={selectRadio} {...props} />
        </Styled.RadioDetailsContainer>
    </Fragment>
}

export default withTheme(RadioDetailsPreview)
