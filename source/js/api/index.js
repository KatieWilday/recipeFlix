// Simple API wrapper

// const API_URL = 'https://swapi.co/api';
const API_URL = 'http://0.0.0.0:8080';


// Custom API error to throw
function ApiError(message, data, status) {
  let response = null;
  let isObject = false;

  // We are trying to parse response
  try {
    response = JSON.parse(data);
    isObject = true;
  } catch (e) {
    response = data;
  }

  return {
    response,
    message,
    status,
    toString: () => {
      return `${ this.message }\nResponse:\n${ isObject ? JSON.stringify(this.response, null, 2) : this.response }`;
    },
  };
}

// API wrapper function
const fetchResource = (path, userOptions = {}) => {
  // Define default options
  const defaultOptions = {};

  // Define default headers
  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const options = {
    // Merge options
    ...defaultOptions,
    ...userOptions,
    // Merge headers
    mode: 'cors',
    headers: {
      ...defaultHeaders,
      ...userOptions.headers,
      'Access-Control-Allow-Origin': 'http://0.0.0.0:8080/*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept',
    },
    method: 'GET',
  };


  // Build Url
  const url = `${ API_URL }/${ path }`;

  console.log('url: ', url)

  // Detect is we are uploading a file
  const isFile = typeof window !== 'undefined' && options.body instanceof File;

  // Stringify JSON data
  // If body is not a file
  if (options.body && typeof options.body === 'object' && !isFile) {
    options.body = JSON.stringify(options.body);
  }

  // Variable which will be used for storing response
  let response = null;


  console.log('options11: ', options)

  return fetch(url, options)
    .then(responseObject => {
      console.log('fire1')
      // Saving response for later use in lower scopes
      response = responseObject;

      // HTTP unauthorized
      if (response.status === 401) {
        // Handle unauthorized requests
        // Maybe redirect to login page?
      }

      // Check for error HTTP error codes
      if (response.status < 200 || response.status >= 300) {
        // Get response as text
        return response.text();
      }

      // Get response as json
      return response.json();
    })
    // "parsedResponse" will be either text or javascript object depending if
    // "response.text()" or "response.json()" got called in the upper scope
    .then(parsedResponse => {
      console.log('fire2')
      // Check for HTTP error codes
      if (response.status < 200 || response.status >= 300) {
        // Throw error
        throw parsedResponse;
      }

      // Request succeeded
      return parsedResponse;
    })
    .catch(error => {
      console.log('fire3')
      // Throw custom API error
      // If response exists it means HTTP error occured
      if (response) {
        console.log('fire4')
        throw ApiError(`Request failed with status ${ response.status }.`, error, response.status);
      } else {
        console.log('fire5')
        throw ApiError(error.toString(), null, 'REQUEST_FAILED');
      }
    });
};

function getPeople() {
  return fetchResource('people/');
}

function getUserAll() {
  return fetchResource('getAllUsers')
}

export default {
  getPeople,
  getUserAll,
};
