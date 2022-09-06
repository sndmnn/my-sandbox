export default function extractYouTubeVideoId(url: string): string | null {
  const videoUrl = new URL(url);

  // Video ID is passed on query string as `v`
  if (videoUrl.searchParams.has('v')) {
    return videoUrl.searchParams.get('v');
  }
  // Video ID is passed on query string as `vi`
  else if (videoUrl.searchParams.has('vi')) {
    return videoUrl.searchParams.get('vi');
  }
  // Video ID is passed inside the URL path
  else if (
    videoUrl.pathname.startsWith('/embed/') ||
    videoUrl.pathname.startsWith('/v/') ||
    videoUrl.pathname.startsWith('/vi/')
  ) {
    return videoUrl.pathname.split('/')[2];
  }
  // Shortened URLs
  else if (videoUrl.hostname === 'youtu.be') {
    return videoUrl.pathname.split('/')[1];
  }

  return null;
}
