import './App.scss';
import Search from './components/Search'
import youtubeApi from './api/youtube'
import React from 'react'
import VideoList from './components/VideoList'
import VideoPlayer from './components/VideoPlayer'

class App extends React.Component {
    state = {
      videoMetaInfo: [],
      selectedVideoId: null
    }

    onVideoSelected = videoId => {
      this.setState({
        selectedVideoId: videoId
      })
    }

    onSearch = async keyword => {
      const response = await youtubeApi.get("/search", {
        params: {
          q: keyword
        }
      });
      this.setState({
        videoMetaInfo: response.data.items,
        selectedVideoId: response.data.items[0].id.videoId
      });
      console.log(this.state)
    }
    render() {
    return (
      <div className="container">
        <div className="left-scene">
          <div className="form-search divider div-transparent">
            <Search onSearch={this.onSearch} />
          </div>
            <VideoPlayer videoId={this.state.selectedVideoId} />
          </div>

            <div className="right-scene">
              <VideoList onVideoSelected={this.onVideoSelected}
              data={this.state.videoMetaInfo}
              />
            </div>
      </div>
    );
  }
}

export default App;
