import React, { useEffect, useRef, useState } from 'react';
import './VideoBackground.css';

const VideoBackground = ({ videos, currentIndex, onVideoEnd }) => {
  const videoRefs = useRef([]);
  const observerRef = useRef(null);
  const [loadedVideos, setLoadedVideos] = useState(new Set());

  useEffect(() => {
    // Create Intersection Observer for lazy loading
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            // Lazy load video source
            if (video.dataset.src && !video.src) {
              video.src = video.dataset.src;
              video.load();
            }

            // Attempt autoplay
            if (video.dataset.id === videos[currentIndex]?.id) {
              const playPromise = video.play();
              if (playPromise) {
                playPromise
                  .then(() => {
                    setLoadedVideos(prev => new Set([...prev, video.dataset.id]));
                  })
                  .catch((error) => {
                    console.warn('Autoplay blocked:', error);
                    // Fallback to poster if autoplay blocked
                    if (video.dataset.poster && !video.poster) {
                      video.poster = video.dataset.poster;
                    }
                  });
              }
            } else {
              video.pause();
            }
          } else {
            video.pause();
          }
        });
      },
      { rootMargin: '500px 0px 500px 0px' }
    );

    // Observe all video elements
    videoRefs.current.forEach((video) => {
      if (video) {
        observerRef.current.observe(video);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [videos, currentIndex]);

  useEffect(() => {
    // Handle video transitions
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === currentIndex) {
        video.classList.add('is-loaded');
        const playPromise = video.play();
        if (playPromise) {
          playPromise.catch(() => {
            // Autoplay failed
            if (video.dataset.poster && !video.poster) {
              video.poster = video.dataset.poster;
            }
          });
        }
      } else {
        video.classList.remove('is-loaded');
        video.pause();
      }
    });
  }, [currentIndex]);

  const handleVideoEnd = (videoId) => {
    if (onVideoEnd) {
      onVideoEnd(videoId);
    }
  };

  return (
    <div className="video-background">
      {videos.map((video, index) => (
        <video
          key={video.id}
          ref={(el) => (videoRefs.current[index] = el)}
          className={`video-background__video ${index === currentIndex ? 'is-loaded' : ''}`}
          data-src={video.src}
          data-poster={video.poster}
          data-object-fit="cover"
          data-id={video.id}
          muted
          preload="auto"
          playsInline
          onEnded={() => handleVideoEnd(video.id)}
        />
      ))}
    </div>
  );
};

export default VideoBackground;
