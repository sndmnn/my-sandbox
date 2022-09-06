import React, { useEffect, useRef } from 'react';
import YouTube, { YouTubeEvent } from 'react-youtube';
import extractYouTubeVideoId from '../utils/extractYouTubeVideoId';

type AnalyticsReportData = {
  /**
   * Is `true` if the watched minutes are equal to the video duration, `false` otherwise.
   */
  wasVideoWatched: boolean;

  /**
   * Time in seconds
   */
  watchedSeconds: number;
};

type ComponentProps = {
  videoUrl: string;
  report: (reportData: AnalyticsReportData) => void;
};

const YouTubePlayerWithAnalyticsReport: React.FC<ComponentProps> = ({
  videoUrl,
  report,
}) => {
  const videoId = extractYouTubeVideoId(videoUrl) || '';

  const analyticsReportDataRef = useRef<AnalyticsReportData>({
    wasVideoWatched: false,
    watchedSeconds: 0,
  });

  useEffect(() => () => report(analyticsReportDataRef.current), [report]);

  const handlePlayerPauseEvent = (e: YouTubeEvent) => {
    analyticsReportDataRef.current.watchedSeconds = e.target.getCurrentTime();
    report(analyticsReportDataRef.current);
  };

  const handlePlayerEndEvent = (e: YouTubeEvent) => {
    analyticsReportDataRef.current.wasVideoWatched = true;
    analyticsReportDataRef.current.watchedSeconds = e.target.getDuration();
  };

  return (
    <YouTube
      videoId={videoId}
      // onReady={handlePlayerReadyEvent}
      onPause={handlePlayerPauseEvent}
      onEnd={handlePlayerEndEvent}
    />
  );
};

export default YouTubePlayerWithAnalyticsReport;
