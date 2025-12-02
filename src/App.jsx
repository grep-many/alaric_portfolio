import { Navigate, Route, Routes } from "react-router";
import Navbar from "@/components/Navbar";
import { navigation } from "@/constants";
import Home from "@/pages/Home";

const App = () => (
  <>
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
  </>
);

export default App;
