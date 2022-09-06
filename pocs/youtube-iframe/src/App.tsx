import React from 'react';
import YouTubePlayerWithAnalyticsReport from './components/YouTubePlayerWithAnalyticsReport';

const App: React.FC = () => {
  const videoUrl = 'https://youtu.be/DFiU4pt6P5k';

  return (
    <main>
      <YouTubePlayerWithAnalyticsReport
        videoUrl={videoUrl}
        report={console.log}
      />
    </main>
  );
};

export default App;
