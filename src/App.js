import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import SignUp from './pages/signup';
import Location from './pages/location';
import State from './pages/state';
function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		{/* <Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/sign-up' component={SignUp} /> */}
		<Route exact path='/' element={< Home />}></Route>
		<Route path='/about' element={< About />}></Route>
		<Route path='/location' element={< Location />}></Route>
		<Route path='/state' element={< State />}></Route>
		<Route path='/signup' element={< SignUp />}></Route>
		
	</Routes>
	</Router>
);
}

export default App;