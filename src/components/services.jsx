import myServices from "./data/services"
import Wave from './utils/wave'

const Services = () => {
	return (
		<section id="services" className="section full-height">
			<div className="inner d-flex align-items-center">
				<div className="container">
					<h2 className="section-title wow fadeIn" aria-label="Freelance Web Tasarım Hizmeti">
						<span>
							<span>Hizmetlerim</span>
						</span>
					</h2>
					<div className="row position-relative">
						{
							myServices.map((el, index) => 
								(
									<div key={el.id} className="col-12 col-md-6 col-lg-4 py-3">
										<div className="wow slideInUp" data-wow-delay={(0.15 * index) + 's'}>
											<div className="icon"><i className="material-icons">{el.icon}</i></div>
											<h3><a href="/" aria-label={el.label}>{el.title}</a></h3>
											<p>{el.text}</p>
										</div>
									</div>
								)
							)
						}
					</div>
				</div>
				<div className="next-btn wow fadeIn" data-wow-delay="1s">
					<a href="#works">
						<i className="exterBounce material-icons">arrow_downward</i>
					</a>
				</div>
			</div>
			<Wave class="black" />
		</section>
	)
}

export default Services