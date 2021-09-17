import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex: 1 1 100%;
    flex-flow: column nowrap;
    background-color: ${p => p.theme.color.primary};
`

export const FlexDividerHorizontal = styled.div`
    flex: 0 0 0;
    border-top: 1px solid ${props => props.theme.color.color15};
`

export const HeaderWrapper = styled.div`
    display: flex;
    flex: 1 0 5%;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 20px;
    background-color: ${p => p.theme.color.rollianSecondary};
`

export const ContentWrapper = styled.div`
    display: flex;
    flex: 3 0 70%;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

export const FooterWrapper = styled.div`
    display: flex;
    flex: 1 0 15%;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: ${p => p.theme.color.primaryDark};
`