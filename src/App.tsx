import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const BrowserRouter = createBrowserRouter([{ path: "/", element: <Home /> }]);
function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={BrowserRouter} />
      <Footer />
    </>
  );
}

export default App;
