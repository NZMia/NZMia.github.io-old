import React from 'react';
import axios from 'axios';

axios.defaults.basePath = '/';
axios.defaults.headers = {
	"Content-Type": "application/json; charset=utf-8",
	'Access-Control-Allow-Origin': '*'
};

// axios request interceptor
axios.interceptors.request.use ((config) =>  {
		console.log('Start with Ajax');
		return config
	}, (error) => {
		console.log('Error');
		return Promise.reject(error);
	}
);

// axios response interceptor
axios.interceptors.response.use ((response) => {
		console.log('Done with Ajax call');
		return response;
	}, (error) =>  {
		console.log(error);
		console.log('Error fetching the data');
		return Promise.reject(error);
	}
);
