import { Banner, Category } from "../../components/home";
import Header from "../../components/home/header/Header";
import "./home.css";
const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Category />
      </main>
    </>
  );
};

export default Home;
