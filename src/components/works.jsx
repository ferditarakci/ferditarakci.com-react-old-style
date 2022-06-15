import React, { useState, useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import wowjs from 'wowjs'
import { ScrollTo } from "react-scroll-to"
import Wave from './utils/wave'

const Works = () => {

	const [page, setPage] = useState(1)
	const [works, setWorks] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [isNextBtn, setIsNextBtn] = useState(true)
	
	let limit = 1

	window.addEventListener('resize', () => {
		const width = window.innerWidth
		if (width >= 576 && width < 992) {
			limit = 2
		}

		else if (width >= 992 && width < 1240) {
			limit = 3
		}

		else if (width >= 1240) {
			limit = 4
		}
	})

	window.dispatchEvent(new Event('resize'))

	let timer;
	const fetchWorks = () => {

		if (timer) {
			clearTimeout(timer)
			return false
		}

		timer = setTimeout(() => {}, 100)

		setIsLoading(true)

		const formData = new FormData()
		formData.set('page', page)
		formData.set('limit', limit)
		formData.set('ajax', true)

		fetch(`${process.env.REACT_APP_API_URL}/works.php`, {
			method: 'POST',
			body: formData
		})

		.then(response => response.json())

		.then(response => {
			if (typeof response.works != 'undefined') {
				setWorks(works => [...works, ...response.works])
				// if (response.works.length < limit) setIsNextBtn(false)
			}
			else setIsNextBtn(false)
		})

		.then(() => {
			setPage(page + 1)
		})

		.finally(() => {
			setTimeout(() => {
				new wowjs.WOW({
					live: false,
					animateClass: 'animated',
					offset: 0,
					callback: function(box) {
						box.classList.remove('wow')
					}
				}).init()

				setTimeout(() => {
					setIsLoading(false)
				}, 100)
			}, 1)
		})

		.catch(error => console.log(error))
	}

	let count = 0
	const counter = (index) => {
		if (index % limit === 0) count = 0
		let second = (0.15 * count).toFixed(2)
		count++
		return second
	}

	const scrollTo = () => {
		const header = document.querySelector('#header')
		const boxs = document.querySelector('#work-boxs')
		const rect = boxs.getBoundingClientRect()
		return ((boxs.offsetHeight + (rect.top + window.scrollY)) - (header.offsetHeight + 20))
	}

	const clickToWebsite = (link) => {
		var nw = window.open()
		nw.location = `http://${link}`
		nw.target = '_blank'
		nw.opener = null
	}

	useEffect(() => {
		fetchWorks()
	}, [])

	return (
		<section id="works" className="section works full-height">
			<div className="inner">
				<h3 className="section-title wow fadeIn" aria-label="Web Tasarım Çalışmaları">
					<span>
						<span>Çalışmalarım</span>
					</span>
				</h3>
				<div id="work-boxs" className="row boxs">
				{works.map((el, index) => (
					<div key={el.id} className="col-12 col-md-6 col-lg-4 col-xl-3 wow slideInUp" data-wow-delay={counter(index) + 's'}>
						<div className="item">
							<figure className="image">
								<LazyLoadImage
									alt={el.customer}
									src={el.image}
									width="600" height="900"
								/>
							</figure>
							<div className="caption">
								<div>
									<h4>{el.customer}</h4>
									<p>{el.service}</p>
									<span className="domain" onClick={(e) => clickToWebsite(el.domain)}>[ {el.domain} ]</span>
								</div>
							</div>
						</div>
					</div>
				))}
				</div>

				{isNextBtn ?
					(<div className="next-btn">
						<i className="exterBounce material-icons">arrow_downward</i>
						<div className="clear"></div>
						<ScrollTo>
							{({ scroll }) => (
								<button
									aria-label="Daha Fazla Web Tasarım Çalışması Göster"
									type="button"
									onClick={() => {
										scroll({ y: scrollTo() })
										fetchWorks()
									}}
									className={`btn btn-danger${isLoading ? ' btn-loading' : ''}`}
								>
									<span>Daha Fazla</span>
								</button>
							)}
						</ScrollTo>
					</div>) : ''
				}
			</div>

			<Wave />
		</section>
	)
}

export default Works