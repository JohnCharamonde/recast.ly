import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import VideoData from '../data/exampleVideoData.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: VideoData[0].id.videoId,
      description: VideoData[0].snippet.description,
      title: VideoData[0].snippet.title,
      flag: false,
    };
  }
  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query,
    };
    this.props.searchYouTube(options, (videos) => {
      this.setState({

      });
    });
  }

  handleVideoClick(url, description, title, flag) {
    this.setState({
      url,
      description,
      title,
      flag
    });
  }

  render() {
    var trigger = () =>{
      flag ? this.handleVideoClick() : null;
    };
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>Video Player</em>
              <VideoPlayer url={this.state.url} description={this.state.description} title={this.state.title} />
            </h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>Video List</em><VideoList handleVideoClick={this.handleVideoClick.bind(this)} /></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
