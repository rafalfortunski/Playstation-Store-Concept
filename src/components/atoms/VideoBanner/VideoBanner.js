import React, { Component } from "react";
import YouTube from "react-youtube";

class VideoBanner extends Component {
  render() {
    const opts = {
      height: "490",
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 1,
        color: "white",
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
      },
    };
    return (
      <YouTube videoId={this.props.video} opts={opts} onReady={this._onReady} />
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.mute();
    event.target.playVideo();
  }
}

export default VideoBanner;
