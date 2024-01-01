/** @format */

import axios from "axios";

export const academyApi = axios.create({
  baseURL: "http://localhost:8080/api/v1"
});

export const register = (profile) => academyApi.post("/auth/register-admin", profile); // registers an admin
export const authenticate = (usernamePassword) => academyApi.post("/auth/authenticate", usernamePassword); // authenticates an admin
export const saveCreatedQuestion = (question) => academyApi.post("/admin/question", question);
