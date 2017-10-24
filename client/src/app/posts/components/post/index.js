import React from 'react';

export function Post(props, {onPostClick}) {
	return (
		<section className={'flex-row flex10'}>
			<div className={'flex-column post-column post-container'}>
				<div className={'post'}>
					<h2>{props.post.title}</h2>
					<h3>{props.post.description}</h3>
				</div>
			</div>
		</section>
	)
}