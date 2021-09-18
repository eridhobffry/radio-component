import styled from "styled-components";

export const FooterWrapper = styled.div`
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    gap: 10px;
`

export const FooterHeadline = styled.h5`
    font-size: ${p => p.theme.fontSize.headline2};
    font-weight: ${p => p.theme.fontWeight.bold};
    color: ${p => p.theme.color.rollianSecondary};
    margin: 0px;
`

export const FooterSelectedRadioName = styled.p`
    font-size: ${p => p.theme.fontSize.headline2};
    font-weight: ${p => p.theme.fontWeight.medium};
    color: ${p => p.theme.color.color15};
    margin: 0px;
`