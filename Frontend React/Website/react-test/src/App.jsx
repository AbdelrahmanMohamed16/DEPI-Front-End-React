import Assignment1 from "./components/Assignment1";
import Assignment2 from "./components/Assignment2";
import "bootstrap/dist/css/bootstrap.min.css";
import Assignment3 from "./components/Assignment3";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./components/Store/AuthContextProvider";

export default function App() {
  return (
    <>
      {/* <Assignment1 />
      <Assignment2 /> */}
      <BrowserRouter>
        <AuthContextProvider>
          <Assignment3 />
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}
