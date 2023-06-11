import React, { useState } from "react";
import "./styles.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImg/Img";
import { PlayBtn } from "../PlayBtn";
import VideoPopup from "../../../components/videoPopup/VideoPopup";

const VideoSection = ({ loading, data }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className="videoSection">
      <ContentWrapper>
        <div className="sectionHeading">Official Videos</div>
        {!loading ? (
          <div className="videos">
            {data?.results?.map((video) => (
              <div
                key={video.id}
                onClick={() => {
                  setVideoId(video.key);
                  setShow(true);
                }}
                className="videoItem"
              >
                <div className="videoThumbnail">
                    <Img
                        src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                    />
                    <PlayBtn/>
                </div>
                <div className="videoTitle">{video.name}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="videoSkeleton">
            {loadingSkeleton}
            {loadingSkeleton}
            {loadingSkeleton}
            {loadingSkeleton}
          
          </div>
        )}
      </ContentWrapper>
      <VideoPopup 
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VideoSection;
