import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';

import SignUp from './pages/signup';
// import Location from './pages/location';


function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home />}></Route>
		<Route exact path='/about'element={<About />}></Route>
		<Route exact path='/sign-up'element={<SignUp />}></Route>
		{/* <Route exact path='/location' element={< About />}></Route> */}
	</Routes>
	</Router>
);
}

export default App;
