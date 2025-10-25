import Layout from "../../components/Layout/Layout.jsx";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import NewItems from "../../components/NewItems/NewItems.jsx";

const HomePage = () => {
    return (
        <Layout>
            <HeroSection />
            <NewItems />
        </Layout>
    );
};

export default HomePage;