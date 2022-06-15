import React, { useState } from 'react'
import Wave from './utils/wave'
import Socials from "./data/socials"

const Contact = () => {

	const [alerts, setAlerts] = useState([])

	const handleSubmit = (e) => {
		e.preventDefault()

		setAlerts([{
			class: 'info',
			message: 'İşlem yapılıyor, lütfen bekleyiniz...'
		}])

		const form = e.target
		const formData = new FormData(form)
		formData.set('ajax', true)

		fetch(`${process.env.REACT_APP_API_URL}/mailsend.php`, {
			method: 'POST',
			body: formData
		})

		.then(response => response.json())

		.then(response => {
			response.success.map(el => el.class = 'success')
			response.errors.map(el => el.class = 'danger')
			setAlerts([...response.success, ...response.errors])

			if (response.success.length) {
				Array.from(form)
					.filter(el => ['input', 'textarea'].includes(el.tagName.toLowerCase()))
					.forEach(el => el.value = '')
			}

			setTimeout(() => {
				window.dispatchEvent(new Event("resize"))
			}, 1)
		})

		.catch(error => console.log(error))
	}

	return (
		<section id="contact" className="section full-height">
			<div className="inner">
				<div className="container pt-5">
					<h5 className="section-title wow fadeIn">
						<span>
							<span>İletişim</span>
						</span>
					</h5>
					<div className="row no-gutters pb-3">
						<div className="col-12 col-lg-7 pe-lg-5 a">
							<div className="row no-gutters info position-relative wow slideInLeft" data-wow-delay="0.2s">
								<div className="col-12 col-sm-6 p-3 p-md-4 p-lg-4">
									<div className="wow">
										<div className="icon"><i className="material-icons">phone</i></div>
										<h5>Telefon</h5>
										<p><a href="tel:+90 546 831 20 73">+90 546 831 20 73</a></p>
									</div>
								</div>
								<div className="col-12 col-sm-6 p-3 p-md-4 p-lg-4">
									<div className="wow">
										<div className="icon"><i className="material-icons" aria-hidden="true">email</i></div>
										<h5>E-Posta</h5>
										<p><a href="mailto:bilgi@ferditarakci.com">bilgi@ferditarakci.com</a></p>
									</div>
								</div>
								<div className="col-12 col-sm-6 p-3 p-md-4 p-lg-4">
									<div className="wow">
										<div className="icon"><i className="material-icons">location_on</i></div>
										<h5>Adres</h5>
										<p>Kadıköy / İSTANBUL</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 p-3 p-md-4 p-lg-4">
									<div className="wow">
										<div className="socials circular d-flex align-items-center justify-content-center">
											<div className="d-flex py-4">
											{Socials.map(el => (
												<a key={el.class} href={el.link} className={`my-2 ${el.class}`} rel="external noopener" aria-label={`${process.env.REACT_APP_TITLE}, ${el.title}`}><span className="d-none">{el.title}</span></a>
											))}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 pt-sm-5 pb-3 d-lg-none">
							<div className="border-top">&nbsp;</div>
						</div>
						<div className="col-12 col-lg-5 b">
							<div className="form px-3 px-lg-0 wow slideInRight" data-wow-delay="0.2s">
								<form onSubmit={(e) => handleSubmit(e)}>
									<div className="form-label">
										<div>
											<input type="text" placeholder="Adınız Soyadınız" name="name" className="form-control" />
											<i className="required"></i>
										</div>
									</div>
									<div className="form-label">
										<div>
											<input type="text" placeholder="Telefon Numaranız" name="phone" className="form-control" />
											<i className="required"></i>
										</div>
									</div>
									<div className="form-label">
										<div>
											<input type="text" placeholder="E-Posta Adresiniz" name="email" className="form-control" />
											<i className="required"></i>
										</div>
									</div>
									<div className="form-label">
										<div>
											<input type="text" placeholder="Konu" name="subject" className="form-control" />
											<i className="required"></i>
										</div>
									</div>
									<div className="form-label">
										<div>
											<textarea placeholder="Mesajınız" name="message" rows="3" cols="3" className="form-control"></textarea>
											<i className="required top"></i>
										</div>
									</div>
									<div className="d-flex justify-content-end">
										<button className="btn btn-success btn-lg" type="submit">
											GÖNDER<i className="material-icons">keyboard_arrow_right</i>
										</button>
									</div>
									{(alerts.length ? (<div class="mt-4" role="alert"></div>) : '')}
									{
										alerts.map(el => 
											(<div key={el.message} class={`alert alert-${el.class} alert-dismissible text-start mt-2 mb-0`} role="alert">
												<div>{el.message}</div>
											</div>)
										)
									}
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Wave class="black" />
		</section>
	)
}

export default Contact