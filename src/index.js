import Promise from 'promise-polyfill';
import 'isomorphic-fetch';

if (typeof window !== 'undefined' && !window.Promise) {
  window.Promise = Promise;
}

class Client {

}

class Response {

}

fetch('http://localhost:9000/parse-query', {
  method: 'POST',
  body: 'from planets'
}).then(response => {
  console.log(response.status);
  return response.text();
}).then(body => {
  console.log(body);
});

module.exports = {
  Client: Client,
  Response: Response
};
