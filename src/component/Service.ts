import axios from 'axios';
import {Gate} from "./types";

const instance = axios.create({
  baseURL: 'http://ec2-52-57-77-14.eu-central-1.compute.amazonaws.com:8080',
  timeout: 1000,
});

export const calculateEmulation = (data: Gate[]) => instance.post("/emulator", data);
