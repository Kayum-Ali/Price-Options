import PropTypes from "prop-types"
import Feature from "../Feature/Feature";
const PriceOption = ({ option }) => {
    const { name, price, features } = option
    return (
        <div className="bg-blue-500 p-4 rounded-md flex flex-col text-white mt-5">
            <h2 className="text-center font-extrabold ">
                <span className="text-3xl">{price}</span>
                <h4 className="text-2xl">{name}</h4>
            </h2>
            <div className="mt-5 pl-5 flex-grow">
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className="mt-12 bg-green-500 font-bold hover:bg-green-800 duration-1000 w-full py-2 rounded-full">Buy Now</button>

        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;