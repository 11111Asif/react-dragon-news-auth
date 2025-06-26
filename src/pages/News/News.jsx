
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";



const News = () => {

    const newsPaper = useLoaderData()
    const { id } = useParams()
    const paper = newsPaper.find(paper => paper.id === id)
    console.log(paper)

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-5">
                <div className="md:col-span-5 ">
                    <div className="card card-compact bg-base-100 py-5 px-5 shadow-xl">
                        <figure>
                            <img
                                src={paper.thumbnail_url}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-semibold">{paper.title}</h2>
                            <p>{paper.details}</p>
                            
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2 ">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;