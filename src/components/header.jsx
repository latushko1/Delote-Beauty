import React, { useState } from 'react';
import MobileMenu from './mobileMenu';
import insta from '/images/insta.svg';
import logo from '/images/logo.svg';
import openMenu from '/images/open.svg';

function Header() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div className='w-full container relative '>
				<ul className='mt-[30px] justify-between flex text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full px-6 items-center'>
					<li>
						<a href='/'>
							<img src={insta} alt='instagramm' />
						</a>
					</li>
					<li className='hidden sm:block hover:text-accend hover:underline'>
						<a href='/'>Главная</a>
					</li>
					<li className='hidden sm:block hover:text-accend hover:underline'>
						<a href='masters'>Мастера</a>
					</li>
					<li className='hidden hover:text-accend hover:underline '>
						<a href='404'>Косметика</a>
					</li>
					<li>
						<a href='/'>
							<img src={logo} alt='' />
						</a>
					</li>
					<li className='hidden sm:block hover:text-accend hover:underline'>
						<a href='prises'>Акции</a>
					</li>
					<li className='hidden sm:block hover:text-accend hover:underline'>
						<a href='report'>Отзывы</a>
					</li>
					<li className='hidden sm:block hover:text-accend hover:underline'>
						<a href='contacts'>Контакты</a>
					</li>
					<li>
						<img
							onClick={() => setOpen(!open)}
							className='cursor-pointer'
							src={openMenu}
							alt='open'
						/>
					</li>
				</ul>
			</div>
			{open && <MobileMenu />}
		</>
	);
}

export default Header;
