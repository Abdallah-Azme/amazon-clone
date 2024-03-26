import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Container from "./components/commen/Container";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="bg-primary text-secondary">
        <Container className="">
          <Navbar />
        </Container>
      </div>
      <Container className="mt-3">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}
