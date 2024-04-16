import { get } from '@/api/common/apiUtils';

const getFilter = async ({ dateTypes, foodTypes, ages, genders }) => {
  let query = '/post/filter';
  const params = [];

  if (dateTypes) params.push(`dateTypes=${dateTypes}`);
  if (foodTypes) params.push(`foodTypes=${foodTypes}`);
  if (ages) params.push(`ages=${ages}`);
  if (genders) params.push(`genders=${genders}`);

  if (params.length > 0) {
    query = `${query}?${params.join('&')}`;
  }

  return get(query);
};

export default {
  getFilter,
};
