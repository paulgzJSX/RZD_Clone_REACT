import Header from './components/Header';
import './App.css';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Trip from './components/Trip';
import Trains from './components/Trains';
import Mobile from './components/Mobile';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Cards />
        <Trip />
        <Trains />
        <Mobile />
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;
