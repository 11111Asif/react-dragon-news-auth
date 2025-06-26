import { Link } from "react-router-dom";
import star from "../../assets/star.png"
import { FaEye } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";

const NewsCard = ({ news }) => {
    const { title, thumbnail_url, details, id, } = news;
    return (
        <div className="">
            <div className="navbar bg-base-100 border">
                <div className="navbar-start">
                    <div className="flex">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-16 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={news.author.img} />
                            </div>
                        </div>
                        <div className="ml-2">
                            <p>{news.author.name}</p>
                            <p>{news.author.published_date}</p>
                        </div>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                </div>
                <div className="navbar-end gap-3">
                    <FaRegBookmark className="text-2xl"></FaRegBookmark>
                    <CiShare2 className="text-2xl"></CiShare2>
                </div>
            </div>
            <div className="card bg-base-100 shadow-sm mb-8 border">
                <div className="card-body">
                    <h2 className="card-title text-2xl">{title}</h2>

                </div>
                <figure>
                    <img
                        src={thumbnail_url}
                        alt="" />
                </figure>
                <p className="mt-6 px-3">{details}</p>
                <span className="text-[#ff8c47] px-3 py-3"><Link to={`/news/${id}`}>Read More</Link></span>
                <div className="border-b-2 py-3 ml-3 mr-3"></div>
                <div className="py-3 px-3 flex items-center justify-between">
                    <div className="flex">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <p className="ml-1.5 text-xl items-center mt-1">4.9</p>
                    </div>
                    <div className="flex">
                        <FaEye className="mt-1 text-xl"></FaEye>
                        <p className=" ml-1.5 text-xl">499</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;