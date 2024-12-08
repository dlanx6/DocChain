import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import LoginAccount from "./pages/LoginAccount";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
			<Route path='/login/:role' element={<LoginAccount />} />
            <Route path="/home/:role" element={<Home />} />
            <Route path="/admin/create/:role" element={<CreateAccount />} />
        </Routes>
    );
};

export default App;