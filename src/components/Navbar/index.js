import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';



const Navbar = () => {
return (
	<>
	<Nav>
        
		<Bars />

		<NavMenu>
        <div className='logo'>
            <h2>
                <span>R</span>eal
                <span>S</span>tate
            </h2>

        </div>

		<NavLink to='/about' activestyle='true'>
			About
		</NavLink>
		<div>
		<Dropdown className="d-inline mx-2" autoClose="inside">
        <Dropdown.Toggle id="dropdown-autoclose-inside">
          Location
        </Dropdown.Toggle>

        <Dropdown.Menu>
		<br/>
          <Dropdown.Item href="/location">Cities</Dropdown.Item><br/>
          <Dropdown.Item href="/state">State</Dropdown.Item><br/>
          {/* <Dropdown.Item href="/about">Kolkata</Dropdown.Item><br/> */}
        </Dropdown.Menu>
      </Dropdown>
		</div>

		
		
		
		{/* <NavLink to='/sign-up' activestyle='true'>
			Sign Up
		</NavLink> */}
		{/* Second Nav */}
		
		</NavMenu>

		<NavBtn>
		<NavBtnLink to='/signup'>Register</NavBtnLink>
		<NavBtnLink to='/login'>Login</NavBtnLink>
		</NavBtn>

	</Nav>
	</>
);
};

export default Navbar;