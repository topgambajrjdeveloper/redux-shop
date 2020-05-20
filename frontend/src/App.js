import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import ProductScreen from "./screen/ProductScreen";
import HomeScreem from "./screen/HomeScreen";

function App() {
  return (
    <Router>
      <div className="grid-container">
        {/*<!-- header -->*/}
        <Header />
        {/*<!-- end header -->*/}
        {/*<!-- sidebar -->*/}
        <Sidebar />
        {/*<!-- end sidebar -->*/}
        <main className="main">
          <div className="content">
            {/*<!-- Gallery -->*/}
            {}
            <Gallery/>
            {/*<!-- end Gallery -->*/}

            <Route path="/" exact={true} component={HomeScreem} />
            <Route path="/product/:id" component={ProductScreen} />
          </div>
        </main>
        {/*<!-- Footer -->*/}
        <Footer />
        {/*<!-- end Footer -->*/}
      </div>
    </Router>
  );
}

export default App;
