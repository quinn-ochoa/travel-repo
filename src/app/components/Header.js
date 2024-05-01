import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
} from 'reactstrap';

import ImgHeader from '../../app/assets/bg.jpeg';
import UserLoginForm from '../../features/user/UserLoginForm';

const Header = () => {
    const [menuOpen, setMenuOpen]= useState(false);
    return (
        <header className='site-header'>
        <Navbar sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <p  >TRIPMASTER</p>
                <h1 className='mt-1'>Create your own </h1>
                <h1>journey</h1>
                
            </NavbarBrand>
            
            <NavbarToggler onClick={()=> setMenuOpen(!menuOpen)}/>

                <UserLoginForm/>
            
        </Navbar>
        <div class="d-flex justify-content-center">
        <img src={ImgHeader} alt='' width='90%' class="rounded"/>
        </div>
        
        </header>
    );
}

export default Header;