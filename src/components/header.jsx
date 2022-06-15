import React, { useState } from "react"
import Navs from "./data/navs"
import Socials from "./data/socials"

const Header = () => {

	const [openNav, setOpenNav] = useState(false)

	return (
		<header id="header">
			<div className="top-bar">
				<div className="container">
					<div className="row">
						<div className="col-6 col-lg-4">
							<h1 className="logo">
								<a href="/" aria-label="Freelance Web Tasarım">
									<span>
										<span>Freelance Web Tasarım</span>
									</span>
								</a>
							</h1>
						</div>
						<div className="col-6 col-lg-8 position-relative d-flex align-items-center justify-content-end" id="nav">
							<nav className={`main-nav nav flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between${openNav ? ' open-nav' : ''}`}>
								{Navs.map(el => (
									<a key={el.text} href={el.link} aria-label={`${process.env.REACT_APP_TITLE}, ${el.title}`} onClick={() => setOpenNav(!openNav)} className="nav-link">{el.text}</a>
								))}
							</nav>

							<div className="socials d-flex align-items-center">
								<div className="d-flex">
									{Socials.filter(el => el.header).map(el => (
										<a key={el.class} href={el.link} className={el.class} rel="external noopener" aria-label={`${process.env.REACT_APP_TITLE}, ${el.title}`}><span className="d-none">{el.title}</span></a>
									))}
								</div>
							</div>

							<div className={`nav-button d-lg-none${openNav ? ' open' : ''}`} onClick={() => setOpenNav(!openNav)}>
								<div className="hamburger">
									<span></span>
									<span></span>
									<span></span>
								</div>
								<div className="cross">
									<span></span>
									<span></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header