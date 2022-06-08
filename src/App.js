import React, { useState, lazy, Suspense } from "react";
import "./assets/css/style.css";
const  About = lazy (() => import( "./container/components/about/About"));
const  Appointment = lazy (() => import( "./container/components/appointement/Appointment"));
const  Footer = lazy (() => import( "./container/components/footer/Footer"));
const  Gallery = lazy (() => import( "./container/components/gallery/Gallery"));
const  Header = lazy (() => import( "./container/components/header/Header"));
const  Home = lazy (() => import( "./container/components/home/Home"));
const  Menuu = lazy (() => import( "./container/components/menu/Menuu"));
const  Package = lazy (() => import( "./container/components/package/Package"));
const  Service = lazy (() => import( "./container/components/service/Service"));
function App() {
  // const [loading, setLoading] = useState(true);
  // const spinner = document.getElementById("spinner");
  // if (spinner) {
  //   setTimeout(() => {
  //     spinner.style.display = "none";
  //     setLoading(false);
  //   }, 2000);
  // }
  return (
    <div className="App">
      <Suspense fallback={ <div id="spinner" className="container-loader">
      <img src="/img/loading.gif" alt="loader"/>
    </div>}>
        <>
          <Header />
          <Home />
          <About />
          <Service />
          <Package />
          <Menuu />
          <Appointment />
          <Gallery />
          <Footer />
        </>
      </Suspense>
    </div>
  );
}

export default App;
