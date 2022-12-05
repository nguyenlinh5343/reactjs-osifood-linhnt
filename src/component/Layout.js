import React from 'react'
import Header from './Header'
import {Routes, Route} from 'react-router-dom'
import Index from '../pages/Index'
import Detail from '../pages/Detail'
function Layout() {
	return (
		<div>
			<Header/>
			<Routes>
				<Route path='/detail'  element={<Detail/>}/>	
				<Route path='/'  element={<Index></Index>}/>	
			</Routes>
		</div>
	)
}

export default Layout