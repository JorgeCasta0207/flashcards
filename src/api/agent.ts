import axios, { AxiosError, AxiosResponse } from "axios";
import { PaginatedResult } from "../models/pagination";
import { User, UserFormValues } from "../models/user";
import { Sets } from "../models/set";
import { Flashcard } from "../models/flashcard";

axios.defaults.baseURL = "https://bvtflashcardsserver.fly.dev/api/";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axios.interceptors.response.use(
  (response) => {
    const pagination = response.headers["pagination"];
    if (pagination) {
      response.data = new PaginatedResult(
        response.data,
        JSON.parse(pagination)
      );
      return response as AxiosResponse<PaginatedResult<object>>;
    }
    return response;
  },
  (error: AxiosError) => {
    const { status } = error.response as AxiosResponse;
    switch (status) {
      case 400:
        console.log(error);
        break;
      case 401:
        console.log(error);
        break;
      case 403:
        console.log(error);
        break;
      case 404:
        console.log(error);
        break;
      case 500:
        console.log(error);
        break;
    }
    return Promise.reject(error);
  }
);

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: object) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: object) =>
    axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Account = {
  current: () => requests.get<User>("account"),
  login: (user: UserFormValues) => requests.post<User>("account/login", user),
  register: (user: UserFormValues) =>
    requests.post<User>("account/register", user),
};

const Set = {
  list: (params: URLSearchParams) =>
    axios.get<PaginatedResult<Sets[]>>("sets", { params }).then(responseBody),
  create: (set: Sets) => requests.post<void>("sets", set),
  update: (set: Sets) => requests.put<void>(`sets/${set.id}`, set),
  delete: (id: string) => requests.delete<void>(`sets/${id}`),
};

const Flashcards = {
  list: (id: string) => requests.get<Flashcard[]>(`flashcards/${id}`),
  update: (flashcards: Flashcard[], id: string) =>
    requests.put<void>(`flashcards/${id}`, flashcards),
};

const agent = {
  Account,
  Set,
  Flashcards,
};

export default agent;
