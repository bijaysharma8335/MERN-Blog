import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import { Context } from "./context/Context";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Write from "./pages/Write/Write";
import Single from "./pages/single/Single";

const App = () => {
    const { user } = useContext(Context);
    return (
        <Router>
            <Topbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route
                    path="/register"
                    element={user ? <Home /> : <Register />}
                />{" "}
                <Route path="/login" element={user ? <Home /> : <Login />} />
                <Route
                    path="/settings"
                    element={user ? <Settings /> : <Register />}
                />
                <Route
                    path="/write"
                    element={user ? <Write /> : <Register />}
                />
                <Route path="/post/:postId" element={<Single />} />
            </Routes>
        </Router>
    );
};

export default App;
