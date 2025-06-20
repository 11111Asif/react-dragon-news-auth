import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import swimming from '../../../assets/swimming.png';
import student from '../../../assets/class.png';
import playground from '../../../assets/playground.png';



const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-2 mb-6">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <br />
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            <div className="p-4 mb-6">
                <h2 className="text-3xl mb-4">Find Us On</h2>
                <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                    <FaFacebook className="mr-3"></FaFacebook>
                    Facebook
                </a>
                <a className="p-4 flex text-lg items-center border-x" href="">
                    <FaTwitter className="mr-3"></FaTwitter>
                    Twitter
                </a>
                <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
                    <FaInstagram className="mr-3"></FaInstagram>
                    Instagram
                </a>
            </div>
            {/* q zoon */}
            <div className="p-4 space-y-4 mb-6">
                <h2 className="text-3xl">Q-Zone</h2>

                <img src={swimming} alt="" />
                <img src={student} alt="" />
                <img src={playground} alt="" />

            </div>

            <div className="p-4 space-y-2 mb-6">
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-3xl font-bold">Create an Amazing Newspaper</h1>
                            <p className="mb-5">
                                Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                            </p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RightSideNav;