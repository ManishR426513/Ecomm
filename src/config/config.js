import axios from "axios";
//import store from '../Redux/store';

export const withoutAuthAxios = () => {
  return axios.create({
   //baseURL: process.env.REACT_APP_BASEURL
   baseURL: "http://localhost:7000"
  });
};

/*
export const authAxios = () => {
  let token = store.getState().auth.token;
 
  return axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    headers: {
      'Authorization': `${token ? `${token}` : null}`,
    },
  });
};*/
