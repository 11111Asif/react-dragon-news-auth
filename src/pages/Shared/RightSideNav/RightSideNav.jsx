import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

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
                 <a className="p-4 flex text-lg items-center border" href="">
                    <FaTwitter className="mr-3"></FaTwitter>
                    Twitter
                </a>
                 <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
                    <FaInstagram className="mr-3"></FaInstagram>
                    Instagram
                </a>
            </div>
        </div>
    );
};

export default RightSideNav;