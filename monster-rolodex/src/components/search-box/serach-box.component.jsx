import "./search-box.styles.css"

const searchBox = ({className, placeholder, onChangeHandler}) => (
      <input 
          className={`search-box ${className}`}
          type="search"
          placeholder={placeholder}
          onChange={onChangeHandler} 
          
          />
    )


export default searchBox;

