import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-[#f3f3f3] py-3">
            <button className="btn btn-secondary mr-5">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12 font-popping text-black" to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link className="mr-12 font-popping text-black" to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link className="mr-12 font-popping text-black" to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;