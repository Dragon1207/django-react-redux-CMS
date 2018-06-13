import React from 'react';

export class PortfolioContainer extends React.Component {
	render() {
		return (
			<section className="portfolio-box">
				<a target='blank'
				   href='https://nucific.com/'
				   className='nucific'></a>
				<a target='blank'
				   href='https://themighty.com/'
				   className='themighty'></a>
				<a target='blank'
				   href='https://stellar.aero/'
				   className='stellar'></a>
				<a target='blank'
				   href='https://oncentrl.com/'
				   className='centrl'></a>
				<a target='blank'
				   href='http://www.viscira.com/'
				   className='viscira'></a>
				<a target='blank'
				   href='https://noxsterseo.com/'
				   className='noxster'></a>
			</section>
		)
	}
}