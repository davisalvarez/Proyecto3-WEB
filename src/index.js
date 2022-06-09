import React from 'react'
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Routes, Route,} from "react-router-dom";

//
import './style/home.css'
import DesktopHome from "./components/DesktopHome.jsx";

const App = () =>{
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path={"/"} element={<DesktopHome/>}/>
					<Route path={"*"} element={<div>404 Not found...</div>}/>
					{/*<Route path={"*"} element={<DesktopHome/>}/>*/}
				</Routes>
			</BrowserRouter>
		</>
	);
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
