import IconDashboard from "../icons/icon-dashboard";
import './search.css';

const Search = () => {
    return (
        <div className="search-container">
            <div className="input-group flex-nowrap">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="addon-wrapping">
                        <IconDashboard />
                    </span>
                </div>
                <input type="text" className="form-control search-input" placeholder="Search user" 
                        aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
        </div>
    );
};
export default Search;

