import React from 'react';
import axios from 'axios';
// import {Toast} from 'antd-mobile';

axios.defaults.basePath = '/api';
axios.defaults.headers = {
	"Content-Type": "application/x-www-form-urlencoded"
};

// axios request interceptor
axios.interceptors.request.use (
	config => {
		// Toast.loading('加载中', 1);

		var token = window.localStorage.token;

		if(token) {
			config.headers.Authorization = `token ${token}`;
		}
		return config;
	},
	err => {
		console.log('Request Failed');
		return Promise.reject(err);
	}
);

// axios response interceptor
axios.interceptors.response.use (
	response => {
		// Toast.hide();
		return response;
	},
	error => {
		if (error.response) {
		}
		return Promise.reject(error.response.data)
	}
);
