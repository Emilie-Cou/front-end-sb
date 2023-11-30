import './App.scss'
import Footer from './components/parts/footer/footer';
import Navbar from './components/parts/navbar/navbar';
import Router from './components/parts/route/route';

function App() {
	
	const coucou = "Coucou les amis, bienvenue"

	return (
		<>
			<Navbar />
			<h1>{coucou}</h1>
			<Router />
			<Footer />
		</>
	)
}

export default App
