import styled from 'styled-components';
import {useState} from 'react';
import { MdArrowDropDown } from "react-icons/md";

import './Navbar.css';

const Navbar = (props) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleFirstButton = () => {
        props.onSelectAlgo(false)
        handleOpen()
    }

    const handleSecondButton = () => {
        props.onSelectAlgo(true)
        handleOpen()
    }

    return (
        <Container>
            <h1 style = {{fontFamily: 'Silkscreen', fontSize: '19px', fontWeight: 300, color: '#ffff', marginRight: '80px'}}>UNIQUE <span style = {{color: '#2EBBD1'}}>PATHS</span></h1>
            <div className = 'dropdown'>
                <button onClick = {handleOpen}><span>Choose Algorithm</span><MdArrowDropDown className = {open ? 'icon-down' : null} /></button>
                {open ? (
                    <ul className = 'menu'>
                        <li className = 'menu-item'>
                            <button onClick = {handleFirstButton}>Brute Force</button>
                        </li>
                        <li className = 'menu-item'>
                            <button onClick = {handleSecondButton}>Dynamic Programming</button>
                        </li>
                    </ul>
                ) : null}
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height : 50px;
    background-color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 40px;
`

export default Navbar