import React from "react";
import '../styled/base.scss';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { Routes, Route, BrowserRouter , Link } from 'react-router-dom';

function Header(props) {
	const innerRef = props.innerRef;
	const listmenu = [{name:'Trang chủ', route:"/"},
	{name:'Giới thiệu', route:"/intro"},
	{name:'Sản phẩm', route:"/products"},
	{name:'Bài viết', route:"/articles"},
	{name:'Liên hệ', route:"/contact"},
	{name:'Tuyển dụng', route:"/hiring"}
]
	const [open, setOpen] = React.useState(false);
	const handleOpen = () =>{
		setOpen(!open)
	}
	return (
		<>
		<header className='main-header'  ref={innerRef}>
			<div className='main-header-top'>
				<div className='container2'>
					<div className= {open ? 'main-header-top-flex action' : 'main-header-top-flex'}>
						<button onClick={handleOpen}  className='main-header-top-icon'>
							<span className='box-icon'>
								<span className='hamburger-menu'>
									<span className="bar"></span>
								</span>
							</span>
							<span className='box-text'>
								menu
							</span>
						</button>
						<div className = " sitenav-content sitenav-menu menu-mobile" id="siteNav-menu">
							<div className="sitenav-content__title">		
								<a href="https://osifood.vn" className="navlogo" aria-label="Trang chủ" title="Trang chủ">
									<span className="icon-home">
									</span>
								</a>			
								<button className="btnclose">
								</button>
							</div>
							<div className="sitenav-content__block">
								<div className="mobile-menu">
									<div className="mobile-menu__inner mplus-menu vertical-navigation">				
										<ul className="mobile-menu__linklists">		
										{ listmenu.map((item, index) => 
											<li className="navi1"><Link to={item.route}>{item.name}</Link></li>
										)}			
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className='main-header-top-logo'>
							<a>
								<img src='/logo.webp'>
								</img>
							</a>
						</div>
						<div className='main-header-top-search'>
							<form action="/search" className="searchform-product searchform-categoris ultimate-search">
								<div className="wpo-search-inner">
									<input type="hidden" name="type" value="product"/>
									<input required="" id="inputSearchAuto-3" className="input-search" name="q" maxlength="40" autocomplete="off" type="text" size="20" placeholder="Tìm kiếm sản phẩm..."/>
								</div>
								<button type="submit" className="btn-search btn">
									<svg className="svg search" height="30px" width="30px" viewBox="0 0 24 24"><path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path></svg>
								</button>
							</form>
						</div>
						<div className='main-header-top-action'>
							<div className='header-action'>
								<div className='header-action-item'>
									<a href="#">
										<span className='text-top'>
											Giao hoặc đến lấy tại 
										</span>
										<span className='text-over'> 288 Phan Văn Trị, Phường 11, Quận Bình Thạnh </span>
									</a>
								</div>
								<div className='header-action-item'>
									<a href="#">
										<span className='text-top icon'>
										<AiOutlineUser/>
										</span>
										<span className='text-over'> Tài khoản </span>
									</a>
								</div>
								<div className='header-action-item'>
									<a href="#">
										<span className='text-top icon'>
										<AiOutlineShoppingCart/>
										</span>
										<span className='text-over'> Giỏ hàng</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='main-header-group'>
				<div className='container2'>
					<div className='main-header-group-flex'>
						<a href="#">
							<span className='group-logo'>
								<AiOutlineHome/>
							</span>
						</a>
						<ul className='menu-list'>
						{ listmenu.map((item, index) => 
						<li className='menu-list-item'>
								<Link to={item.route}>
								{item.name}
								</Link>
							</li>
						)}
						</ul>
					</div>
				</div>
			</div>
		</header>
	
		</>
	)
}

export default Header