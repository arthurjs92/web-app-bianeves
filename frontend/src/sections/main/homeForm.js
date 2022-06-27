import React, { Component } from "react";
import Logo from "../../img/imagens-header/logo-principal.png";

class HomeForm extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-4 col-sm-8 col-md-8 col-lg-4">
          <div className="text-center">
            <img src={Logo} className="img-responsive img-fluid d-block w-50"/>
          </div>
          <div class="input-group p-3">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button type="button" class="btn btn-outline-primary">
              search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeForm;
