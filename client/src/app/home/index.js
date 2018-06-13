import React from 'react';

export function Home() {
	return (
		<section className={'home flex'}>
			<div className={'home-text flex-6'}>
				<h1>rafay</h1>
				<h2>
					<i>
						Creative. Bold. Outlier.
					</i>
				</h2>
				<div className={'home-about-text'}>
					Contact me if you would like consultation on project development or goals.

					<div className={'contact-info'}>
						<div className={'email-icon'}>
							<i className={'material-icons'}>email</i>
							<span><a href={'mailto:rafay826@gmail.com'}>rafay826@gmail.com</a></span>
						</div>
						<a className={'github-icon'}
						   target={'blank'}
						   href={'https://github.com/rafay826'}>
							<img className={'github-img'} alt={'github'}
							     src='https://rafayio-assets.nyc3.digitaloceanspaces.com/rafay.io/assets/media/github-icon.svg'/>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}