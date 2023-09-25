import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import HomePage from "./components/pages/home-page";
import LoginPage from "./components/pages/login-page";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-grayDarker">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/login" Component={LoginPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
