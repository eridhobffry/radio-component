import React from 'react'
import styled from 'styled-components'

const StyledIconWrapper = styled.div`
    display: flex;
    align-items: center;
    flex: 0 1 auto;
    border-radius: 100%;
`

const StyledFontIcon = styled.i`
    color: ${props => props.color};
    cursor: pointer;
    font-size: ${props => props.fontSize};
    border: ${p => p.borderless ? '0px' : '2px'} solid ${p => p.theme.color.color15};
    padding: 5px;
    border-radius: 100%;
`
const FontIcon = ({ icon, color = 'black', hoverColor = 'gray', title = 'icon', isClickable = false, fontSize = '24px', borderless = false, onIconClick }) => {
    return (
        <StyledIconWrapper onClick={onIconClick}>
            <StyledFontIcon borderless={borderless} className="material-icons" title={title} color={color} hoverColor={hoverColor} fontSize={fontSize} isClickable={isClickable}>{icon}</StyledFontIcon>
        </StyledIconWrapper>  
    )
}

export default FontIcon