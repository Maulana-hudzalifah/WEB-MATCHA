import Navbar  from "./components/Navbar.jsx";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Medsos from "./components/Medsos";


export default function Home() {
  return (
    <div className="app">
     <Navbar/>
      <main>
        <Hero/>
        <Menu/>
        <Medsos/>
      </main>

    </div>
  );
}
