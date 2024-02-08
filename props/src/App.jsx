import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Buttons, Card, Heading } from "./Components/Card";

function App() {
  return (
    <>
      <Navbar />
      <div className="cards">
        <Card
          title="card 1"
          description="card1 description"
          img={
            "https://www.mooc.org/hs-fs/hubfs/learn-programming-career-jpg.jpeg?width=500&name=learn-programming-career-jpg.jpeg"
          }
        />
        <Card
          title="card 2"
          description="card2 description"
          img={
            "https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8="
          }
        />
        <Card
          title="card 3"
          description="card3 description"
          img={
            "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"
          }
        />
        <Card
          title="card 4"
          description="card4 description"
          img={
            "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"
          }
        />
      </div>
      <Buttons title="click me" />
      <Buttons title="clickk me" />
      <Buttons title="clickkk me" />
      <Heading heading ="aryah" />

      
      <Footer />
    </>
  );
  // props are arguments passed into react components
}

export default App;
