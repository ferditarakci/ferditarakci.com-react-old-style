import React, { useState } from 'react'

const Footer = () => {

	const [loader, setLoader] = useState(true)

	const date = new Date()

	window.addEventListener('load', () => {
		setTimeout(() => {
			setLoader(false)
		}, 500)
	})

	return (
		<>
		<footer id="footer">
			<div className="container">
				<p>&copy; 2014 - {date.getFullYear()} / ferditarakci.com</p>
			</div>
		</footer>

		<div id="fixed-buttons">
			<div>
				<a href="//wa.me/905468312073?text=Merhaba!" className={`whatsapp${!loader ? ' loaded': ''}`}>
					<span><span>Whatsapp Destek Hattı</span></span>
				</a>
			</div>
		</div>
		</>
	)
}

export default Footer