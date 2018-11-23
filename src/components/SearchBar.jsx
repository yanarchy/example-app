import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }
  }

  handleChange = event => {
    this.setState({value: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state.value);
  }

  render() {
    return (
      <div className='input'>
        <form
          onSubmit={this.handleSubmit}
        >
          <input
            type='text'
            placeholder='Search Giphy'
            value={this.state.value}
            onChange={this.handleChange}  
          />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default SearchBar;
