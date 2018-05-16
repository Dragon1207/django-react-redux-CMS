import React from 'react';

export function Post(props) {
	return (
		<section className={'post-list-container'}>
			<div>
				<section className='flex-row'>
					<div className='flex-column post-column post-container'>
						<div className='post'>
							<h2>{props.post.title}</h2>
							<h3>{props.post.description}</h3>
						</div>
					</div>
				</section>	
			</div>
		</section>
	)
}