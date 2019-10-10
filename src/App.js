import React, {Component} from 'react';
import {Grid} from '@material-ui/core';

import {SearchBar, VideoDetails, VideoList} from './components';
import youtube from './youtube/api';

export default class App extends Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.handleSubmit('javascript')
    }

    handleSubmit = async (searchTerms) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 15,
                q: searchTerms,
                key: '[API_KEY]'
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[1]
        });
    };
    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        });
    };

    render() {
        const {selectedVideo} = this.state;
        const {videos} = this.state;
        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8} style={{height: '915px'}}>
                            <VideoDetails video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList onVideoSelect={this.onVideoSelect} videos={videos}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}