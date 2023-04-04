import { Component } from "react";
import "./search-box.styles.css"

class searchBox extends Component {
  render () {
    const {search} = this.props;
    return (
      <input 
          className={`search-box ${this.props.className}`}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler} 
          
          />
    )
  }
}

export default searchBox;

