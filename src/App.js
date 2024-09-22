import './App.css';
import Header from "./components/Header";
import Destination from './components/Destination';
import Footer from './components/Footer';
import data from "./data";

function App() {
  return (
    <div className="App">
      <Header />
      {data.map((destination, index) => (
        <Destination 
          key={destination.id}
          data={destination}
          isLast={index === data.length - 1} // Pass a prop to indicate if it's the last item
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
