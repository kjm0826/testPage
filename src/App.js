import React from "react";
import MainCard from "./component/MainCard";
import './App.css';
import Header from "./component/Header";
import KeepScan from "./component/KeepScan";


function App() {
  return (
    <div>
      <Header />
      <MainCard />

      {/* <KeepScan /> */}
    </div>
    // <BrowserRouter>
    //     <Routes exact path="/main" component={MainCard} />
    // </BrowserRouter>
  );
};

export default App;
