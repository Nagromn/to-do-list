import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TaskForm from "./pages/TaskForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <main className="mx-10">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="ajouter-tache" element={<TaskForm />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
