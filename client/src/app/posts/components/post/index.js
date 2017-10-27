import React from 'react';

export function Post(props) {
	return (
		<section className={'post-list-container'}>
			<div>
				<section className={'flex-row flex10'}>
					<div onClick={props.onPostClick} className={'flex-column post-column post-container'}>
						<div className={'post'}>
							<h2>{props.post.title}</h2>
							<h3>{props.post.description}</h3>
						</div>
					</div>
				</section>	
			</div>
		</section>
	)
}