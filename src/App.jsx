import './assets/scss/style.scss'

import Header from './components/header'
import Footer from './components/footer'
import Loader from './components/loader'
import Hero from './components/hero'
import About from './components/about'
import Services from './components/services'
import Works from './components/works'
import Contact from './components/contact'

function App() {
	return (
		<div className="site-wrapper">
			<Loader />
			<Header />
			<Hero />
			<About />
			<Services />
			<Works />
			<Contact />
			<Footer />
		</div>
	)
}

export default App