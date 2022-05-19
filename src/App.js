
import './assets/css/style.css'
import About from './container/components/about/About';
import Appointment from './container/components/appointement/Appointment';
import Footer from './container/components/footer/Footer';
import Gallery from './container/components/gallery/Gallery';
import Header from './container/components/header/Header';
import Home from './container/components/home/Home';
import Menu from './container/components/menu/Menu';
import Menuu from './container/components/menu/Menuu';
import Package from './container/components/package/Package';
import Service from './container/components/service/Service';
import Testimonials from './container/components/testimonials/Testimonials';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Service/>
      <Package/>
      <Menuu/>
      <Appointment/>
      <Gallery/>
      {/* <Testimonials/> */}
      <Footer/>
    </div>
  );
}

export default App;
