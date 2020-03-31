import React, {Component} from 'react';


class  SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {},
        }

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch = (e) => {
        e.preventDefault();
        this.setState({item: e.target.value})
    }

  render() {
    return (
        <form className='search__box'>
            <input
                type='text'
                className='search__bar'
                placeholder='Search in Google...'
                onChange={this.handleSearch}
            />
            <button className='search__button' type='submit'>
                <i className='gg-search'></i>
            </button>
        </form>
    );
  }
}

export default SearchBar;
