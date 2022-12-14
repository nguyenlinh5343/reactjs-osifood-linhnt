import React, { useRef, useState, useEffect } from "react";

import '../styled/base.scss';
import Header from '../component/Header';
import Slide from "../component/Slide";
import ListProduct from "../component/ListProduct";

const pro = [{
	name:'cá hú tươi',
	price: 8000,
	image:'https://product.hstatic.net/200000459373/product/tai_xuong__9__e20bf99465594802829fb0178e95d85d_large.jpg'

},

{
	name:'cá thỏ tươi',
	price: 566600,
	image:'https://product.hstatic.net/200000459373/product/tai_xuong__9__e20bf99465594802829fb0178e95d85d_large.jpg'

},
{
	name:'cá heo tươi',
	price: 20000,
	image:'https://product.hstatic.net/200000459373/product/tai_xuong__9__e20bf99465594802829fb0178e95d85d_large.jpg'

},
{
	name:'cá mè tươi',
	price: 20000,
	image:'https://product.hstatic.net/200000459373/product/tai_xuong__9__e20bf99465594802829fb0178e95d85d_large.jpg'

},
{
	name:'cá a tươi',
	price: 12220,
	image:'https://product.hstatic.net/200000459373/product/tai_xuong__9__e20bf99465594802829fb0178e95d85d_large.jpg'

}]
function Index() {
	const [prod, setProd] = React.useState(pro);
	return (
		<>
		<Header />
		<main>
			<Slide/>
			<ListProduct prod ={prod}/>
		</main>


		</>
	)
}

export default Index