import Axios from "axios";
import { toast } from "react-toastify";

const authRequestInterceptor = (config) => {

  const authToken = localStorage.getItem("token");
  console.log("hello",authToken)
  config.headers = config.headers ?? {};

  if (authToken) {
    config.headers.authorization = `Bearer ${authToken}`;
  }
  config.headers.Accept = "application/json";
 
  return config;
};

export const axiosInstance = Axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
});

axiosInstance.interceptors.response.use(function (response) {
  

  return response;
}, function (error) {
 
 
  
  if (!error) {
    error.code !== "ERR_CANCELED" &&
      toast.error("Something went wrong with server");
     
    return Promise.reject(error);
  }
console.log(error,"error")
  const message =
    error?.response?.data?.message || error?.message || "Something went wrong";
  toast.error(message);
  
  
  
  return Promise.reject(error);
});

axiosInstance.interceptors.request.use(authRequestInterceptor);





