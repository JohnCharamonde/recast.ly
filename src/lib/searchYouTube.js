var searchYouTube = (options, callback) => {
  $.get('https://www.googleapis.com/youtube/v4/search', {
    part: 'snippet',
    key: options.key,
    q: options.query,
    maxResults: options.max || 5,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({ items }) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({ responseJSON }) => {
      responseJSON.error.errors.forEach((err) => console.error(err));
    });
};

export default searchYouTube;
