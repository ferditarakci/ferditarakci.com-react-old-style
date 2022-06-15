import React, { useEffect } from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import Wave from './utils/wave'

const Hero = () => {

	useEffect(() => {

		const fullHeight = document.querySelectorAll('.full-height')
		const resize = () => {
			fullHeight.forEach(el => {
				const css = el.style
				css.height = ''
				css.minHeight = ''

				let height = `calc(${window.innerHeight}px - var(--header))`

				if (el.clientHeight >= window.innerHeight || el.classList.contains('works')) {
					css.minHeight = height
				}
				else {
					css.height = height
				}
			})
		}

		window.addEventListener('resize', resize)
		window.dispatchEvent(new Event("resize"))
	
	}, [])

	return (
		<section id="home" className="section fullwidth full-height">
			<div className="inner">
				<LazyLoadComponent>
					<video preload="metadata" width="1920" height="1080" muted autoPlay loop playsInline>
						<source src={`${process.env.REACT_APP_DOMAIN}/images/ferditarakci_video.mp4`} type="video/mp4"/>
					</video>
				</LazyLoadComponent>

				<div className="gradient"></div>

				<div className="container">
					<div className="row align-items-center relative">
						<div className="col-12 tp_text">
							<h2 className="wow slideInUp" data-wow-delay="0.1s">
								<a href="/">
									Freelance <span><span>Web Tasarım</span> Uzmanı</span>
								</a>
							</h2>

							<p className="wow slideInUp" data-wow-delay="0.3s">
								Merhaba! Ben Ferdi. İstanbul'da, <strong>Freelance Web Developer</strong> olarak hizmet vermekteyim.<br className="d-none d-md-block"/> Verdiğim hizmetler kısaca; <strong>Web Tasarım</strong>, <strong>Web Yazılım</strong>,<br className="d-none d-md-block"/> HTML5/CSS3/JS, VUE-JS ve REACT-JS <strong>Front End Kodlama</strong>,<br className="d-none d-md-block"/> PHP-MYSQL Back End Programlama, Google SEO ve Google Adwords alanında hizmet veriyorum.<br/> <em style={{fontWeight: 600}}>Siz de profesyonel hizmet alın mağdur olmayın!</em>
							</p>
						</div>
					</div>
				</div>

				<div className="next-btn wow fadeIn" data-wow-delay="1s">
					<a href="#about">
						<i className="exterBounce material-icons">arrow_downward</i>
					</a>
				</div>
			</div>

			<Wave class="blue" />
		</section>
	)
}

export default Hero
