import Header from "./components/header/header";
import Home from "./pages/homepage/homepage";
import Footer from "./components/footer/footer";



function App() {
	return (
		<div className="App">
			<Header />
			<main>
        <Home/>
				
			</main>
      <Footer />
		</div>
	);
}

export default App;
