import "./App.css";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <h1 className="text-center my-10 text-5xl font-bold">
          Welcome to my Chat App
        </h1>
        <Home />
      </div>
    </>
  );
}

export default App;
