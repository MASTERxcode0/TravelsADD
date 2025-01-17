import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./Layaut/MainLayauts";
import Home from "./componenta/Home/index";
import RegisterPage from "./componenta/Register/index";
import Card from "./componenta/Startnew/index";
import Searchs from "./componenta/Searchs/Searchs";
import Account from "./componenta/Accaunt/index";
import Calendar from "./componenta/Calendar/Calendar";
import Yolboshlovchi from "./componenta/Home/component/Yolboshlovchi/Yolboshlovchi";
import Explore from "./componenta/Home/component/Explore/Explore";
import Destinations from "./componenta/Home/component/destinations/destinations";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div>
      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/startnew" element={<Card />} />
        <Route
          path="/searchs"
          element={
            <Layout>
              <Searchs />
            </Layout>
          }
        />
        <Route
          path="/account"
          element={
            <Layout>
              <Account />
            </Layout>
          }
        />
        <Route
          path="/calendar"
          element={
            <Layout>
              <Calendar />
            </Layout>
          }
        />
        <Route
          path="/yolboshlovchi"
          element={
            <Layout>
              <Yolboshlovchi />
            </Layout>
          }
        />
        <Route
          path="/explore"
          element={
            <Layout>
              <Explore />
            </Layout>
          }
        />
        <Route
          path="/destinations"
          element={
            <Layout>
              <Destinations />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
