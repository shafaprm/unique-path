import styled from 'styled-components'
import {Fragment, useState} from 'react'

import {Navbar, Templates, BruteForce, Dynamic} from '../components/index.js'

const Root = () => {
    const [algo, setAlgo] = useState(false) // if false, then it is set to brute force

    const handleAlgo = (flag) => {
        setAlgo(flag)
    }

    return (
        <Fragment>
            <Navbar onSelectAlgo = {handleAlgo}/>
            {!algo ? <BruteForce /> : <Dynamic />}
        </Fragment>
    )
}

export default Root