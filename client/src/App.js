import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Seller_Login from './Pages/seller_login.js';
import Seller_Signup from './Pages/seller_signup';
import Attentition_Page from './Pages/Attentition_Page';
import Customer_login from './Pages/Customer_login';
import Customer_signup from './Pages/Customer_signup';
import Seller_home from './Pages/seller_home';
import Seller_Create_Property from './Pages/seller_createProperty';
import Property_details from './Pages/property_details';
import DesignAdmin from './Pages/admin.js';
import Admin_login from './Pages/admin_login';
import Home from './Pages/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Attentition_Page />} />
        </Route>
        <Route path="/adminpanel">
          <Route index element={<DesignAdmin />} />
        </Route>
        <Route path="/admin_login">
          <Route index element={<Admin_login />} />
        </Route>
        <Route path="/Sellerlogin">
          <Route index element={<Seller_Login />} />
        </Route>
        <Route path="/Sellersingup">
          <Route index element={<Seller_Signup />} />
        </Route>
        <Route path="/Customerlogin">
          <Route index element={<Customer_login />} />
        </Route>
        <Route path="/customersignup">
          <Route index element={<Customer_signup />} />
        </Route>
        <Route path="/seller_home">
          <Route index element={<Seller_home />} />
        </Route>
        <Route path="/create_property">
          <Route index element={<Seller_Create_Property />} />
        </Route>
        <Route path="/property_details">
          <Route index element={<Property_details />} />
        </Route>
        <Route path="/home">
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
