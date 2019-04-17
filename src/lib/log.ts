import Axios from "axios";

const LOGGER_HOST = "SOME_URL";

export function send_log(data: any) {
  Axios.post(`${LOGGER_HOST}`, data);
}
