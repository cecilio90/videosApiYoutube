import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({ videos, onSelectVideo }) => {

	const renderedVideo = videos.map( video => {
		return (
			<VideoItem 
				id={ video.id.videoId } 
				onSelectVideo={ onSelectVideo } 
				video={ video }
			/>
		)
	})

	return (
		<div className="ui relaxed divided list">
			{renderedVideo}
		</div>
	)
}

export default VideoList;