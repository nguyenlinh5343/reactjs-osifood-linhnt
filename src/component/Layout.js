import React, { useRef, useState, useEffect } from "react";
import Header from './Header'
import {Routes, Route} from 'react-router-dom'
import Index from '../pages/Index'
import Detail from '../pages/Detail'
import Footer from './Footer'
function Layout() {
	const headerRef = useRef(null);
	console.log(headerRef);
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    setHeaderHeight(headerRef.current.offsetHeight);
  }, [headerHeight]);
	return (
		<div>
			<Header innerRef={headerRef} />
			<div style={{
				marginTop: headerHeight
			}}>
			<Routes >
				<Route path='/detail'  element={<Detail/>}/>	
				<Route  index  element={<Index/>}/>	
			</Routes>
			</div>
			<Footer/>
		</div>
	)
}

export default Layout