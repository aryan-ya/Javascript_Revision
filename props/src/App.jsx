
import './App.css'
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';
import Card from './Components/Card';

function App() {
 

  return (
    <>
    <Navbar />
      <div className="cards">
           <Card title="card 1" description="card1 description" />
           <Card title="card 2" description="card2 description" />
           <Card title="card 3" description="card3 description"/>
           <Card title="card 4" description="card4 description" />
     </div>
    <Footer />
    </>
  )
}

export default App
