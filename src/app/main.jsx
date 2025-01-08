import Home from "./Home";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

function Main({ children }) {
  return (
    <main className="content overflow-hidden">
      <Navbar />
      <Home>{children}</Home>
      <Footer />
    </main>
  );
}

export default Main;
