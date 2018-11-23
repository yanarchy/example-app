import React, { Component } from 'react';
import SearchBar from './SearchBar';
import CurrentGif from './CurrentGif';
import GifList from './GifList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchWords: 'Search',
      image: 'https://media.giphy.com/media/12zV7u6Bh0vHpu/giphy.gif',
      gifHistory: []
    }
  }

  static createHistory(previousImage, gifHistory) {
    const history = gifHistory.slice(0).concat(previousImage);
    if (history.length > 3) {
      history.shift();
    }
    return history;
  }

  handleSearch = (searchWords = "cat") => {
    const URL = 'http://api.giphy.com/v1/gifs/random?' +
      `tag=${searchWords}` +
      '&api_key=9HDQc04ELow7kn8m7L78fMhCbNtK00QG';

    fetch(URL).then(res => res.json()).then(({ data }) => {
      const image = data.images.preview_gif.url;
      const gifHistory = App.createHistory(this.state.image, this.state.gifHistory);

      this.setState({
        searchWords,
        image,
        gifHistory
      });
    });
  }

  componentDidMount() {
    this.handleSearch();
  }

  render() {
      return (
        <div className='app'>
        <h1>Random Giphy Finder</h1>
        <SearchBar
          onSearch={this.handleSearch}
        />
        <CurrentGif
          searchWords={this.state.searchWords}
          image={this.state.image} 
        />
        {this.state.gifHistory.length > 0 ?
          <GifList gifHistory={this.state.gifHistory} /> : null
        }
      </div>
    );
  }
}

export default App;