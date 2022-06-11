import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import youtube from "./apis/youtubeapi";
import VideoList from "./components/VideoList";
import VideoListDefault from "./components/VideoListDefault";
import VideoDetails from "./components/VideoDetails";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: "",
  };

  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onTermSubmit("craft");
  }

  onTermSubmit = async (term) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: res.data.items, selectedVideo:"" });
  };
  render() {
    if(!this.state.selectedVideo ){
      return(
        <>
        <div className="container">
          <div className="row yt">
              <h4 className="text-center row ">
              <div className="col-md-1 d-none d-sm-block"><i class="bi bi-list"></i></div>
              <div className="col-md-2 col-12"><i className="bi bi-youtube "></i>YouTube</div>
              <div className="col-md-5 col-12"> <SearchBar onFormSubmit={this.onTermSubmit} /></div>
              <div className="col-md-4 col-12">
                <i class="bi bi-camera-reels-fill col-md-1 m-2 m-md-3 extra_ions" title="Create"></i>
                <i class="bi bi-app-indicator col-md-1 m-2 m-md-3 extra_ions" title="YouTube Apps"></i>
                <i class="bi bi-bell-fill col-md-1 m-2 m-md-3 extra_ions" title="Notifications"></i>
                <i class="bi bi-person-circle col-md-1 m-2 m-md-3 extra_ions" title="Notifications"></i>
              </div>
              </h4>
              <hr/>
              
          </div>

          <div className="row ">

            <div className="col-md-3 col-12  ">
              <VideoListDefault
                videos={this.state.videos}
                onSelectVideo={this.onSelectVideo}
              />
            </div>
            <div className="col-md-3 col-12">
              <VideoListDefault
                videos={this.state.videos}
                onSelectVideo={this.onSelectVideo}
              />
            </div>

            <div className="col-md-3 col-12 ">
              <VideoListDefault
                videos={this.state.videos}
                onSelectVideo={this.onSelectVideo}
              />
            </div>
            <div className="col-md-3 col-12 ">
              <VideoListDefault
                videos={this.state.videos}
                onSelectVideo={this.onSelectVideo}
              />
            </div>
            
          </div>
        </div>
        
        </>
      );
    }
    return (
      <>
        <div className="container">
          <div className="row yt">
          <h4 className="text-center row ">
              <div className="col-md-1 d-none d-sm-block"><i class="bi bi-list"></i></div>
              <div className="col-md-2 col-12"><i className="bi bi-youtube "></i>YouTube</div>
              <div className="col-md-5 col-12"> <SearchBar onFormSubmit={this.onTermSubmit} /></div>
              <div className="col-md-4 col-12">
                <i class="bi bi-camera-reels-fill col-md-1 m-2 m-md-3 extra_ions" title="Create"></i>
                <i class="bi bi-app-indicator col-md-1 m-2 m-md-3 extra_ions" title="YouTube Apps"></i>
                <i class="bi bi-bell-fill col-md-1 m-2 m-md-3 extra_ions" title="Notifications"></i>
                <i class="bi bi-person-circle col-md-1 m-2 m-md-3 extra_ions" title="Notifications"></i>
              </div>
              </h4>
              <hr/>
              
          </div>

          <div className="row my-2">
            <div className="col-md-7 col-12">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="col-md-5 col12">
              <VideoList
                videos={this.state.videos}
                onSelectVideo={this.onSelectVideo}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
