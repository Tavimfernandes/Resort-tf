import { Home } from './Home';
import { Explore } from './Explore'
import { Viagens } from './Viagens';
import { AboutUs } from './AboutUs';
import { Footer } from './Footer';

import './styles/global.css';


export function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-tl  from-dblue-900 to-dblue-300 flex flex-col text-gray-100">

      <Home />

      <Explore />

      <Viagens />

      <AboutUs />

      <Footer />

    </div>


  )

}
