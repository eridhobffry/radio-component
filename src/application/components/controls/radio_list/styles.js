import styled from "styled-components";

export const DiplayWrapper = styled.div`
    display: flex;
    flex: 1 1 auto;
    padding: 5px 0px;
    border-bottom: 1px solid ${p => p.theme.color.color15};
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const RadioName = styled.h1`
    font-size: ${p => p.theme.fontSize.headline2};
    font-weight: ${p => p.theme.fontWeight.medium};
    color: ${p => p.theme.color.color15};
`

export const RadioFrequency = styled.h1`
    font-size: ${p => p.theme.fontSize.headline2};
    font-weight: ${p => p.theme.fontWeight.bold};
    color: ${p => p.theme.color.color15};
`