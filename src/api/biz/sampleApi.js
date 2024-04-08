import { get, post } from '@/api/common/apiUtils';

const getHealthCheck = async () => {
  return get(`/actuator/health`);
};

const postAsk = async (askRequest) => {
  return post(`/ask`, askRequest);
};

const postCreate = async (postCreateDto) => {
  return post(`/post`, postCreateDto);
};

export default {
  getHealthCheck,
  postAsk,
  postCreate,
};
