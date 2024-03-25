import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Container from "./components/commen/Container";
import Navbar from "./components/navbar/Navbar";
import { sampleProducts } from "./data";

export default function App() {
  return (
    <div className="flex flex-col vh-full">
      <div className="bg-primary  text-secondary">
        <Container className="">
          <Navbar />
        </Container>
      </div>
      <Container className="mt-3">
        <Main />
      </Container>
      <Footer />
    </div>
  );
}
