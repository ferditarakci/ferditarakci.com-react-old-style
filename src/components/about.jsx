import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Wave from './utils/wave'

const About = () => {
	return (
		<section id="about" className="section full-height">
			<div className="inner py-0">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 col-lg-6 a position-relative d-flex align-items-center py-5 py-lg-0">
							<div className="position-relative py-5 py-lg-0 px-2 ps-lg-5 pe-lg-0 wow slideInLeft" data-wow-delay="0.1s">
								<div>
									<h3>Merhaba! Ben Ferdi.</h3>

									<p>1985 Sinop doğumluyum. İstanbul'da ikamet ediyorum. Bilişim sektörüne girdiğim 2008 yılından bu yana birçok kişisel ve kurumsal web projesini tamamladım. İş hayatımda son derece özverili ve disiplinli çalışan biriyim. Özenli çalıştığım sürece tüm işlerimin başarıyla sonuçlanacağını biliyorum.</p>

									<p>Bu bağlamda siz değerli müşterilerime serbest/<strong>freelance web tasarım</strong>, web programlama, HTML-CSS ön yüz kodlama ve wordpress tema kurulumu alanlarında; özgün, amaca uygun ve güncel web tasarım trendlerini göz önünde bulundurarak ve "<strong style={{fontWeight: 600, textDecoration: 'underline'}}>kaliteli iş çıkarma prensibiyle</strong>" Front End'ini kodladığım web sitelerinin <strong style={{fontWeight: 600}}>cross browser</strong> ve <strong style={{fontWeight: 600}}>fully responsive</strong> olmasına özen gösteriyorum. Back End'ini kodladığım sitelerin ise hızlı ve basit yönetilebilir olmasını sağlamaktayım.</p>

									<p>Siz de web sitenizi amatör ellere teslim edip mağdur olmayın!<br/> Profesyonel hizmet almak için benimle <a href="#contact" className="underline">iletişime geçin</a>.</p>
								</div>
							</div>
						</div>
						<div className="col-12 col-lg-6 b position-relative d-none d-lg-block wow fadeIn" data-wow-delay="0.5s">
							<LazyLoadImage
								alt="Software Developer Ferdi Tarakcı"
								src="/assets/images/my.jpg"
							/>
						</div>
					</div>
				</div>

				<div className="next-btn wow fadeIn" data-wow-delay="1s">
					<a href="#services">
						<i className="exterBounce material-icons">arrow_downward</i>
					</a>
				</div>

				<Wave />
			</div>
		</section>
	)
}

export default About