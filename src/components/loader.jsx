import React, { useState } from 'react'

const Loader = () => {

	const [loading, setLoading] = useState(true)

	window.addEventListener('load', () => {
		setTimeout(() => {
			setLoading(false)
		}, 500)
	})

	return (
		<div className={`ft-preload${loading ? ' is-loading' : ''}`}>
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 115.8 105.4" style={{enableBackground : 'new 0 0 115.8 105.4'}} xmlSpace="preserve">
				<g>
					<circle className="st0" cx="57.8" cy="52" r="36.5" />
					<path className="st1" d="M58.3,2.2C30,2.2,7.2,25.1,7.2,53.3c0,28.2,22.9,51.1,51.1,51.1c28.2,0,51.1-22.9,51.1-51.1 C109.4,25.1,86.5,2.2,58.3,2.2z M80.1,39.6c-3.1,0-6.1,0-9.3,0c0,0,0,0,0,0c-5.9,0-11.7,0-17.6,0c0,4,0,4.7,0,8.9 c5.9,0,11.8,0,17.8,0c0,3.3,0,6.5,0,9.8c-5.9,0-11.8,0-17.8,0c0,3.2,0,6.1,0,9.4c0,0,0,0,0,0c0,3.2,0,6.2,0,9.4c-8.3,0-2.8,0-11,0 c0-3.1,0-6.3,0-9.4h0c0-10.8,0-18.1,0-28.8c-2,0-3.8,0-5.7,0c0-3.1,0-6.3,0-9.4c14.5,0,29,0,43.7,0C80.1,35.5,80.1,33.6,80.1,39.6z" />
				</g>
			</svg>
		</div>
	)
}

export default Loader