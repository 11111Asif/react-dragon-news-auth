import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
                <div className="md:col-span-2 border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-4 border">
                    <h2 className="text-4xl">New coming soon</h2>
                </div>
                <div className="md:col-span-2 border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;