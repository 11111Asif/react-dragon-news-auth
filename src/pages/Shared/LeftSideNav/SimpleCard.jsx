import rectangle1 from '../../../assets/Rectangle 3986.png'
import rectangle2 from '../../../assets/Rectangle 3986 (1).png'
import rectangle3 from '../../../assets/Rectangle 3986 (2).png'
import frame from '../../../assets/Frame.png'
import moment from 'moment';

const SimpleCard = () => {
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={rectangle1}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"></h2>
                    <p className="text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="card-actions">
                        <p>Sports</p>
                        <img src={frame} alt="" />
                        <p>{moment().format("MMMM D, YYYY")}</p>
                    </div>
                </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={rectangle2}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"></h2>
                    <p className="text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="card-actions">
                        <p>Sports</p>
                        <img src={frame} alt="" />
                        <p>{moment().format("MMMM D, YYYY")}</p>
                    </div>
                </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={rectangle3}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"></h2>
                    <p className="text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="card-actions">
                        <p>Sports</p>
                        <img src={frame} alt="" />
                        <p>{moment().format("MMMM D, YYYY")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleCard;