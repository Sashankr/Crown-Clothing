import Home from "./routes/home/home.component";
import { Routes, Route, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <Outlet />
    </div>
  );
};

const Shop = () => {
  return <h2>I am shop component</h2>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
