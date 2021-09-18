import React from 'react'
import styled from 'styled-components'

const StyledImagePlaceHolderWrapper = styled.div`
    display: flex;
    flex: 1 1;
    justify-content: center;
`

const StyledImage = styled.img`
    width: ${props => props.large !== undefined ? props.large : '200px'};
    height: ${props => props.height !== undefined ? props.height : 'auto'};
    border: 2px solid ${props => props.theme.color.color20};
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    border-radius: 100%;
`

const ImagePlaceholder = ({ height, large, source, altText = 'alt img'}) => {
    return <StyledImagePlaceHolderWrapper>
        <StyledImage height={height} large={large} src={source} title={source} alt={altText} />
    </StyledImagePlaceHolderWrapper>
}

export default ImagePlaceholder
