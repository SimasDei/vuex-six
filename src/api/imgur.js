import qs from 'qs';
import API from '../../config';

export default {
  login() {
    const queryString = {
      client_id: API.clientId,
      response_type: 'token',
    };
    window.location = `${API.rootUrl}/oauth2/authorize?${qs.stringify(queryString)}`;
  },
};
