import { Navigate, Route, Routes } from "react-router";
import Navbar from "@/components/Navbar";
import { navigation } from "@/constants";
import { Home } from "@/pages";
import React from "react";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

const App = () => (
  <React.Suspense
    fallback={
      <div className="h-screen">
        <Loader R3F={false} />
      </div>
    }
  >
    <Navbar />
    <main>
      <Routes>
        <Route index element={<Home />} />
        {
          // eslint-disable-next-line no-unused-vars
          navigation.map(({ Component, path }, i) => (
            <Route key={i} path={path} element={<Component />} />
          ))
        }
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
    <Footer />
  </React.Suspense>
);

export default App;
