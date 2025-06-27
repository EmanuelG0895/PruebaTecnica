export const logger = {
  info: (message: any, data = {}) => {
    console.log(`[CHARACTER-DETAIL] INFO: ${message}`, data);
  },
  error: (message: any, error = {}) => {
    console.error(` [CHARACTER-DETAIL] ERROR: ${message}`, error);
  },
  warn: (message: any, data = {}) => {
    console.warn(`[CHARACTER-DETAIL] WARN: ${message}`, data);
  },
};
