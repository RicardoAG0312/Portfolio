import NavbarPage from "../components/Navbar/NavbarPage";
import Footer from "../components/Footer/Footer";

const MainLayout = ({ children }) => {
    return (
        <div>
            <NavbarPage />
                <main> {children} </main>
            <Footer />
        </div>
    );
};

export default MainLayout;