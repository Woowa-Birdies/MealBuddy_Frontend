import { get } from '@/api/common/apiUtils';

const getHealthCheck = async () => {
  return get(`/actuator/health`);
};

export default {
  getHealthCheck,
};
