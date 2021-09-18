import React from 'react'
import styled from 'styled-components'

const StyledIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;
    padding: 5px;
    border: ${p => p.borderless ? '0px' : '1px'} solid ${p => p.theme.color.color15};
    border-radius: 100%;
`

const StyledFontIcon = styled.i`
    color: ${props => props.color};
    cursor: pointer;
    font-size: ${props => props.fontSize};
`
const FontIcon = ({ icon, color = 'black', hoverColor = 'gray', title = 'icon', isClickable = false, fontSize = '24px', borderless = false, onIconClick }) => {
    return (
        <StyledIconWrapper onClick={onIconClick} borderless={borderless}>
            <StyledFontIcon className="material-icons" title={title} color={color} hoverColor={hoverColor} fontSize={fontSize} isClickable={isClickable}>{icon}</StyledFontIcon>
        </StyledIconWrapper>  
    )
}

export default FontIcon