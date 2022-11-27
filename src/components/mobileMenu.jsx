import React from 'react';

function MobileMenu() {
	return (
		<div className='absolute left-0 top-0 w-1/2 text-primary bg-secondary h-[100vh] z-50'>
			<div className='relative pt-5'>
				<ul className='mt-8 ml-4 flex gap-3 flex-col'>
					<li className='text-lg leading-6 sm:hidden'>
						<a href='/'>Главная</a>
					</li>
					<li className='text-lg leading-6 sm:hidden'>
						<a href='masters'>Мастера</a>
					</li>
					<li className='text-lg leading-6 sm:hidden'>
						<a href='404'>Косметика</a>
					</li>
					<li className='text-lg leading-6 sm:hidden'>
						<a href='prises'>Акции</a>
					</li>
					<li className='text-lg leading-6 sm:hidden'>
						<a href='report'>Отзывы</a>
					</li>
					<li className='text-lg leading-6 sm:hidden'>
						<a href='contacts'>Контакты</a>
					</li>
				</ul>

				<div className='mt-8 ml-4 flex flex-col gap-[25px]'>
					<h4 className='Garamond text-primary text-2xl'>Контакты</h4>
					<p>+7 (812) 123-45-67</p>
					<p>+7 (911) 123-45-67</p>
					<p>Новоостровский проспект, дом 36 лит. С</p>
				</div>

				<div className='mt-8 ml-4 flex flex-col gap-[25px]'>
					<h4 className='Garamond text-primary text-2xl'>Режим работы</h4>
					<p>C 10:00 до 21:00 (Пн-Пт)</p>
					<p>С 11:00 до 20:00 (Сб-Вс)</p>
				</div>
			</div>
		</div>
	);
}

export default MobileMenu;
