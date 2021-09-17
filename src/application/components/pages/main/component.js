import React from 'react'
import { BaseLayout } from '../_layout'
import RadiosLoader from './loader'
import * as Styled from './styles'

const MainComponent = (props) => {
    const { radiosDataLoaded, radios } = props
    return <RadiosLoader {...props}>
        {
            radiosDataLoaded && <BaseLayout>
                <Styled.MainContainer>
                    <Styled.HeaderWrapper>

                    </Styled.HeaderWrapper>
                    <Styled.FlexDividerHorizontal />
                    <Styled.ContentWrapper>

                    </Styled.ContentWrapper>
                    <Styled.FlexDividerHorizontal />
                    <Styled.FooterWrapper>

                    </Styled.FooterWrapper>
                </Styled.MainContainer>
            </BaseLayout>
        }
    </RadiosLoader>
}

export default MainComponent
