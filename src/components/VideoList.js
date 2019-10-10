import React from 'react';
import {Grid} from '@material-ui/core';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    const listVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>);
    return (
        <Grid container spacing={1}>
            {listVideos}
        </Grid>
    );
};

export default VideoList;