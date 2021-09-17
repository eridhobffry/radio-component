import React, { Fragment, useEffect } from 'react'

const MainLoader = (props) => {
    const { children, radiosDataLoaded, getRadiosRequest } = props
    useEffect(() => {
        !radiosDataLoaded && getRadiosRequest()
    }, [radiosDataLoaded, getRadiosRequest])
    return <Fragment>
        {children}
    </Fragment>
}

export default MainLoader
