import axios from 'axios';
import {Gate} from "./types";

const instance = axios.create({
  baseURL: 'http://localhost:8080/emulator',
  timeout: 1000,
});

export const calculateEmulation = (data: Gate[]) => instance.post("/", data);
