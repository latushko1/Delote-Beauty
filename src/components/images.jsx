import React from 'react';

export default function Images({ text, image, sub }) {
	return (
		<a
			href='/'
			className='relative max-w-[396px] object-cover transition-all hover:scale-105'
		>
			<img className='rounded-xl ' src={image} alt={text} />
			<p className='Garamod text-2xl leading-8 pt-[30px]'>{text}</p>
			<p className='Garamod text-xl leading-8 pt-[15px]'>{sub}</p>
		</a>
	);
}
