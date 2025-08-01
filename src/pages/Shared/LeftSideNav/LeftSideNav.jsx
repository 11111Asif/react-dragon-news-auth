import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SimpleCard from "./SimpleCard";


const LeftSideNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="space-y-6">
            <h2 className="text-3xl">All Categories</h2>
            
                {
                    categories.map(category => <Link className="block ml-4 font-semibold text-xl"
                            key={category.id} to={`/category/${category.id}`}>
                            {category.name}
                            </Link>)
                }

                <SimpleCard></SimpleCard>
            
        </div>
    );
};

export default LeftSideNav;