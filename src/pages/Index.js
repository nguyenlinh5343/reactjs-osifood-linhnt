import React from 'react'
import '../styled/base.scss';
function Index() {
	return (
		<>
		<header className='main-header'>
			<div className='main-header__top'>
				<div className='container2'>
					<div className='main-header__top__flex'>
					<a href='/'  className='main-header__top__icon'>
						<span className='box-icon'>
							<span className='hamburger-menu'>
								<span class="bar"></span>
							</span>
						</span>
						<span className='box-text'>
							menu
						</span>
					</a>
					</div>
				</div>
			</div>
		</header>

		</>
	)
}

export default Index