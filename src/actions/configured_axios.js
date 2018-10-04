import axios from "axios";
import ROOT_URL from "./root_url";

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


