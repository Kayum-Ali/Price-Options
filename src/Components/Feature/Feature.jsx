import PropTypes from "prop-types"
import { BiSolidCheckCircle } from "react-icons/bi";
const Feature = ({feature}) => {

    return (
        <div>
            <p className="flex items-center">
                <BiSolidCheckCircle className="mr-2 text-green-500"></BiSolidCheckCircle>
                {feature}
                </p>
            
        </div>
    );
};

Feature.propTypes ={
    feature: PropTypes.string
}
export default Feature;