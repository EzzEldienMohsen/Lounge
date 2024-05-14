import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const Home = () => {
  return (
    <div className="relative">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Home