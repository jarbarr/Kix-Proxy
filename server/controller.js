const axios = require('axios');

module.exports = {
  getImageCarousel: (request, callback) => {
    let options = {
      url: 'http://localhost:3030/kix',
      method: 'GET',
      proxy: {
        host: '127.0.0.1',
        port: 5291
      }
    };
    axios(options)
      .then((response) => { callback(response.data); })
      .catch(console.log);
  },
  getSidebarSummary: (request, callback) => {
    let options = {
      url: 'http://localhost:5291/sidebar/summary',
      method: 'GET',
      proxy: {
        host: '127.0.0.1',
        port: 3380
      }
    };
    axios(options)
      .then((response) => { callback(response.data); })
      .catch(console.log);
  },
  queryShoeStyle: (request, callback) => {
    let options = {
      url: 'http://localhost:3030/kix',
      method: 'POST',
      proxy: {
        host: '127.0.0.1',
        port: 5291
      },
      data: request.body
    };
    axios(options)
      .then((response) => { callback(response.data); })
      .catch((response) => { callback(response); });
  }
};