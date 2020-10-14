const axios = require('axios');

module.exports = {
  getImageCarousel: (request, callback) => {
    let options = {
      url: 'http://ec2-54-176-93-251.us-west-1.compute.amazonaws.com/kix',
      method: 'GET'
      // proxy: {
      //   host: '127.0.0.1',
      //   port: 5291
      // }
    };
    axios(options)
      .then((response) => { callback(response.data); })
      .catch(console.log);
  },
  getSidebarSummary: (request, callback) => {
    let options = {
      url: 'http://54.176.46.102:3380/sidebar/summary',
      method: 'GET'
      // proxy: {
      //   host: '127.0.0.1',
      //   port: 3380
      // }
    };
    axios(options)
      .then((response) => { callback(response.data); })
      .catch(console.log);
  },
  getReviews: (request, callback) => {
    let options = {
      url: 'http://52.14.202.194:3001/api/reviews',
      method: 'GET'
      // proxy: {
      //   host: '127.0.0.1',
      //   port: 3001
      // }
    };
    axios(options)
      .then((response) => { callback(response.data); })
      .catch(console.log);
  },
  queryShoeStyle: (request, callback) => {
    let options = {
      url: 'http://ec2-54-176-93-251.us-west-1.compute.amazonaws.com/kix',
      method: 'POST',
      // proxy: {
      //   host: '127.0.0.1',
      //   port: 5291
      // },
      data: request.body
    };
    axios(options)
      .then((response) => { callback(response.data); })
      .catch((response) => { callback(response); });
  },
  querySidebar: (request, callback) => {
    let options = {
      url: 'http://54.176.46.102:3380/sidebar/summary',
      method: 'POST',
      // proxy: {
      //   host: '127.0.0.1',
      //   port: 3380
      // },
      data: request.body
    };
    axios(options)
      .then((response) => { callback(response.data); })
      .catch((response) => { callback(response); });
  },
  queryReviews: (request, callback) => {
    let options = {
      url: 'http://52.14.202.194:3001/api/reviews',
      method: 'POST',
      // proxy: {
      //   host: '127.0.0.1',
      //   port: 3001
      // },
      data: request.body
    };
    axios(options)
      .then((response) => { callback(response.data); })
      .catch((response) => { callback(response); });
  }
};