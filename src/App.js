import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Players from './components/Players/Players';

function App() {
  return (
    <>
      <Header />
        <main className="container my-5">
          <div className="row">
            <Players />
          </div>  
        </main>
      <Footer/> 
    </> 
  );
}

export default App;
