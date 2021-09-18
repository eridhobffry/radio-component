import styled from "styled-components";

export const HeaderWrapper = styled.div`
    display: flex;
    flex: 1 1;
    align-items: center;
    flex-flow: row nowrap;
    justify-content: space-between;
`

export const HeaderHeadline = styled.h1`
    font-size: ${p => p.theme.fontSize.headline2};
    font-weight: ${p => p.theme.fontWeight.bold};
    color: ${p => p.theme.color.color15};
    flex: 1 1 auto;
    justify-content: center;
    text-align: center;
`