import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Seller_Login from './Pages/seller_login.js';
import Seller_Signup from './Pages/seller_signup';
import Attentition_Page  from './Pages/Attentition_Page';
import Customer_login from './Pages/Customer_login';
import Customer_signup from './Pages/Customer_signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/">
          <Route index element={<Attentition_Page />} />
        </Route>
        <Route path="/Sellerlogin">
          <Route index element={<Seller_Login />} />
        </Route>
        <Route path="/SellerSingup">
          <Route index element={<Seller_Signup />} />
        </Route>
        <Route path="/Customerlogin">
          <Route index element={<Customer_login />} />
        </Route>
        <Route path="/customerSignup">
          <Route index element={<Customer_signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
