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
          Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0YW5kYXJkIiwia3R5IjoiUlNBIn0.eyJpc3MiOiJ5YW5vdmlzLmNvbSIsImlhdCI6MTY1OTQyNDMxOSwiZXhwIjoxNjU5NDI5NzE5LCJuYmYiOjE2NTk0MjQzMTksImp0aSI6IkVuUXBzb21UTFJFT2JqS1YiLCJzdWIiOjMwMzUsInBydiI6IjM5YzFkODUxOWNiYTEyZjI4NTNiZDIzNDRlNjdkOTFiNmNhMzIyNTciLCJhdWQiOjI2MywiYXV0aF9wcm8iOiJsb2NhbCIsImF1dGhfc3ViIjozMDM1fQ.MccoLRAWnR-XsuMq5rC8TJR0Dqc4qdw0g6zsJ7x5zByPQvtAAlbQt9x-OUK7Iu9BBZ1CTclOHQClZadj3H3GM_FwXKaldj0h7k4Hy1hNoSDvIXZGlyvpeDbt2HF5K2zN3hqwPnsouKtO9Q_iNQYbpykbAIX9GDRmpUOAXSrQA4qlTyPWrn9099LpT8NwDyVjUZniX9cjD7ghOA6QyevK60Nj1NLLe9MMFt_P-A_FtbkzezFMcwfMTZxbzIIdfWv3Gls3he5O5WUZJGGln0hDZlVQdvOKFrqa1ag84qku5UJMdrzNFeuWj9QDYH6wd6I5Ck1S5ln-dU_6wnvkV9eiLg`
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
