import VideoPlayer from './VideoPlayer.js';
class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listArray: this.props,
      url: null,
      description: null,
      title: null,
    };
  }
  sendVideo(url, description, title) {

    this.setState = ({
      url,
      description,
      title
    })
  }
  render() {

    return (
      <VideoPlayer
    url={this.state.url}
    description={this.state.description}
    title={this.state.title} />
      <div className="video-list-entry media">
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.video.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body"></div>
        <div className="video-list-entry-title"
          onClick={this.sendVideo.bind(
            this,
            this.props.video.id.videoId,
            this.props.video.snippet.title,
            this.props.video.snippet.description)}>
          {this.props.video.snippet.title}</div>
        <div className="video-list-entry-detail">{this.props.video.snippet.description}</div>
      </div>
    );
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
