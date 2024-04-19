import { NavLink } from "react-router-dom";
import "../assets/styles/header.css";

const Header = () => {
    return (
        <>
            <header>
                <nav className="flex justify-end p-4">
                    <NavLink to="/" className="mr-4">
                        Accueil
                    </NavLink>
                    <NavLink to="/ajouter-tache" className="mr-4">
                        Ajouter une tâche
                    </NavLink>
                </nav>
            </header>
        </>
    );
};

export default Header;
