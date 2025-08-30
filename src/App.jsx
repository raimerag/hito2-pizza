import Home from "./Components/Home";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import RegisterPage from "./Components/RegisterPage";
import LoginPage from "./Components/LoginPage";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100 ">
        <NavBar />
        <main className="flex-grow">
          {/* <Home /> */}
          <RegisterPage />
          <LoginPage />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
