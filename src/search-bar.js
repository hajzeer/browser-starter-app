import React, {Component} from 'react';


class  SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {},
        }

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange = (e) => {
        this.setState({item: e.target.value});
    }
    
    handleSearch = (e) => {
        e.preventDefault();
        window.location.replace("http://google.com/search?q=" + encodeURIComponent(this.state.item));
    }

  render() {
    return (
        <form className='search__box'>
            <input
                type='text'
                className='search__bar'
                placeholder='Search in Google...'
                onChange={this.handleChange}
            />
            <button className='search__button' type='submit' onClick={this.handleSearch}>
                <i className='gg-search'></i>
            </button>
        </form>
    );
  }
}

export default SearchBar;
