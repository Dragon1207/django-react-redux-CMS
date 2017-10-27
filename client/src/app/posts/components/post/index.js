import React from 'react';
import { Link } from 'react-router-dom';

export function Post(props) {
	return (
		<section className={'post-list-container'}>
			<div>
				<Link to={`/posts/${props.post.id}`}>
					<section className={'flex-row flex10'}>
						<div className={'flex-column post-column post-container'}>
							<div className={'post'}>
								<h2>{props.post.title}</h2>
								<h3>{props.post.description}</h3>
							</div>
						</div>
					</section>	
				</Link>	
			</div>
		</section>
	)
}