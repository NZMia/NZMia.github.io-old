import React from 'react';
import axios from 'axios';

axios.defaults.basePath = '/';
axios.defaults.headers = {
	"Content-Type": "application/json; charset=utf-8"
};

// axios request interceptor
axios.interceptors.request.use (

);

// axios response interceptor
axios.interceptors.response.use (

);
