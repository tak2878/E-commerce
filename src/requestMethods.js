import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjc1NzY3MGVmMzFjMmI2NDk2ZmRmMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjgxMzM2OCwiZXhwIjoxNjQ3MDcyNTY4fQ.uaPzD0zrQco4qRunSdPN6NjRiGizZqBHWUKzkivy7Pk";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN} ` },
});
