import React, { Fragment } from 'react'
import RadiosLoader from './loader'

const MainComponent = (props) => {
    const { radiosDataLoaded, radios } = props
    return <RadiosLoader {...props}>
        {
            radiosDataLoaded && <Fragment>
                {
                    radios[0].name
                }
            </Fragment>
        }
    </RadiosLoader>
}

export default MainComponent
