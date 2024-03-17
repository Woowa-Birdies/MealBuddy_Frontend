import { get } from '@/api/common/apiUtils';

const getSampleData = async () => {
  return get(`https://jsonplaceholder.typicode.com/todos`, {});
};

export default {
  getSampleData,
};
