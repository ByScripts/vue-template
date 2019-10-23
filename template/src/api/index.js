import ky from 'ky';
import { getAuthenticationBearer, isAuthenticated } from '../helpers/auth';

const api = ky.create({
  prefixUrl: process.env.VUE_APP_API_ROOT_URL,
  timeout: 30000,
  hooks: {
    beforeRequest: [
      (input, options) => {
        if (isAuthenticated()) {
          options.headers.set('Authorization', `Bearer ${getAuthenticationBearer()}`);
        }
      },
    ],
    afterResponse: [
      async (input, options, response) => {
        if (response.status === 401) {
          // Do something
        }
      },
    ],
  },
});

export default api;
