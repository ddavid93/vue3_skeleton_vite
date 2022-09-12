import axios, { AxiosInstance } from "axios";
import { IAxios } from "@/_core/interfaces/i-axios";
import { loader } from "@/_core/helpers/loader";

export class AxiosService implements IAxios {
  readonly instance!: AxiosInstance;

  constructor() {
    if (!this.instance) {
      this.instance = axios.create({
        baseURL: import.meta.env.VITE_APP_API_BACKEND,
        headers: {
          Accept: "application/x.yanovis.cloud.v1+json",
          Authorization: `Bearer `
        }
      });
    }
    this.setInterceptorsRequest();
    this.setInterceptorsResponse();
  }

  private static _startLoading() {
    loader.commit("START_LOADING");
  }

  private static _stopLoading() {
    loader.commit("FINISH_LOADING");
  }

  /**
   * @description set interceptors Request
   */
  setInterceptorsRequest() {
    this.instance.interceptors.request.use(
      (config) => {
        AxiosService._startLoading();
        // Do something before request is sent
        config.baseURL =
          import.meta.env[
            config?.url?.startsWith("/ticketing/")
              ? "VITE_APP_API_BACKEND_GATEWAY"
              : "VITE_APP_API_BACKEND"
            ];
        return config;
      },
      (error) => {
        AxiosService._stopLoading();
        // TODO handle error (toast,etc)
        return Promise.reject(error);
      }
    );
  }

  /**
   * @description set interceptors Response
   */
  setInterceptorsResponse() {
    this.instance.interceptors.response.use(
      (response) => {
        AxiosService._stopLoading();
        return response;
      },
      (error) => {
        AxiosService._stopLoading();
        if (error.response?.data && 401 !== error.response.status) {
          const data = error.response.data;
          let errorMessage;
          if (data.code == 1000 && Array.isArray(data.errors)) {
            errorMessage = data.errors
              .slice(0, 5)
              .map((item) => (item.message ? item.message : item.title))
              .join(" ");
          } else {
            errorMessage = data.message;
          }
          return Promise.reject(errorMessage);
          // TODO handle error (toast,etc)
        }
        return Promise.reject(error);
      }
    );
  }
}
