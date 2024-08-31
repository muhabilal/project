import React from 'react'
import { Circles } from 'react-loader-spinner'
const Loader = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100vh" }}>
            <Circles
                visible={true}
                height="100"
                width="100"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                color='#010115'
            />
        </div>
    )
}

export default Loader