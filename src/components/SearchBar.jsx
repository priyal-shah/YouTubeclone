import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    //callback from parent
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <>
        <form onSubmit={this.onFormSubmit} className="container">
          <div className="form-group row">
            <div className="col-md-11 col-11 search_div">
              <div className="row ">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  value={this.state.term}
                  onChange={this.onInputChange}
                  className="col-md-11 col-10 search_input"
                />
                <button className="col-md-1 col-1  search_btn" title="Search"><i class="bi bi-search "></i></button>
              </div>
            </div>
            <button className="col-md-1 col-1 search_mic"  title="Search with your voice"><i class="bi bi-mic-fill"></i></button>
          </div>
        </form>
      </>
    );
  }
}

export default SearchBar;
