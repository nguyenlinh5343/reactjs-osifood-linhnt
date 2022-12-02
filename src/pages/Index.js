import React, { useRef, useState, useEffect } from "react";

import '../styled/base.scss';
import Header from '../component/Header';
import Slide from "../component/Slide";
import ListProduct from "../component/ListProduct";

function Index() {
	const headerRef = useRef(null);
	console.log(headerRef);
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    setHeaderHeight(headerRef.current.offsetHeight);
  }, [headerHeight]);
	return (
		<>
		<Header innerRef={headerRef} />
		<main>
			<Slide  headerHeight={headerHeight} setFirstPageHeight={headerHeight}/>
			<ListProduct/>
		</main>


		</>
	)
}

export default Index