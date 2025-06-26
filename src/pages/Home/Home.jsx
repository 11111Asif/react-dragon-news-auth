import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {

    const newsCard = useLoaderData()
    console.log(newsCard)

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
                <div className="md:col-span-2 border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-4">
                    {
                        newsCard.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
                    }
                </div>
                <div className="md:col-span-2 border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;