import "./App.css";
import Header from "./app/components/Header";
import Footer from "./app/components/Footer";
import TravelList from "./features/travel/TravelList";
import { Container } from "reactstrap";
import Search from "./app/components/Search";
import { DESTINATIONS } from "./app/shared/DESTINATIONS";

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="container d-flex justify-content-center">
        {/* <Search details={DESTINATIONS}/> */}
        <TravelList />
      </Container>

      <Footer />
    </div>
  );
}

export default App;
