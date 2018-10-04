import axios from "axios";
import ROOT_URL from "./root_url";
import cookie from "react-cookies";

const axiosUploadConfig = {
  baseURL: ROOT_URL,
  headers: {
    "Content-Type": "multipart/form-data"
  }
};

export const axiosUploadInstance = axios.create(axiosUploadConfig);

const axiosConfig = {
  baseURL: ROOT_URL,
  headers: {
    "Content-Type": "application/json"
  }
};

export const axiosInstance = axios.create(axiosConfig);

const accessToken = cookie.load("access-token");
if (accessToken) {
  axiosInstance.defaults.headers.common.uid = cookie.load("uid");
  axiosInstance.defaults.headers.common.client = cookie.load("client");
  axiosInstance.defaults.headers.common["access-token"] = cookie.load(
    "access-token"
  );
}
