import axios from "axios";

const WAKE_NOTICE_DELAY_MS = 8000;
let requestId = 0;

// A sleeping Render service normally wakes within a minute. Do not leave the
// interface waiting forever if the service or network is actually unavailable.
axios.defaults.timeout = 75000;

axios.interceptors.request.use((config) => {
  const id = ++requestId;
  config.__apiStatusId = id;
  config.__apiStatusTimer = window.setTimeout(() => {
    config.__apiStatusNoticeShown = true;
    window.dispatchEvent(
      new CustomEvent("api-request-slow", { detail: { id } })
    );
  }, WAKE_NOTICE_DELAY_MS);
  return config;
});

function finishRequest(config) {
  if (!config) return;
  window.clearTimeout(config.__apiStatusTimer);
  if (config.__apiStatusNoticeShown) {
    window.dispatchEvent(
      new CustomEvent("api-request-finished", {
        detail: { id: config.__apiStatusId },
      })
    );
  }
}

axios.interceptors.response.use(
  (response) => {
    finishRequest(response.config);
    return response;
  },
  (error) => {
    finishRequest(error.config);
    return Promise.reject(error);
  }
);
