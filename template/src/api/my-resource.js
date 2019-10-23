import api from './index';

export default {
  findAll: () => api.get('my-resource').json(),
  findOne: (id) => api.get(`my-resource/${id}`).json(),
  create: (data) => api.post('my-resource', { json: data }).json(),
  update: (id, data) => api.patch(`my-resource/${id}`, { json: data }).json(),
  delete: (id) => api.delete(`my-resource/${id}`).json(),
};
