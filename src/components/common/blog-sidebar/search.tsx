import * as React from "react";

const SearchBar = () => {
    return (
        <div className="input-wrap mb-4 mb-sm-5">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search"
                       aria-label="Username" aria-describedby="basic-addon1"/>
                <span className="input-group-text" id="basic-addon1"><i className="fa fa-search" aria-hidden="true"></i></span>
            </div>
        </div>
    )
}
export default SearchBar;
