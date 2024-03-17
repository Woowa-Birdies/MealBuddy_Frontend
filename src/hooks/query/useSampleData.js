import { useQuery } from 'react-query';
import sampleApi from '@/api/biz/sampleApi';
import useSampleStore from '@/store/useSampleStore';

const useSampleData = (key) => {
  const { setSamples, incrementSampleId } = useSampleStore((state) => ({
    setSamples: state.setSamples,
    incrementSampleId: state.incrementSampleId,
  }));
  const queryKey = ['sample', key];
  const queryFn = () => sampleApi.getSampleData();

  return useQuery(queryKey, queryFn, {
    staleTime: 1000 * 60 * 5, // 10초 동안 데이터를 신선하게 유지
    cacheTime: 10 * 60 * 1000, // 성공적인 새 데이터 후 10분간 데이터 캐시 유지
    refetchOnWindowFocus: false, // 윈도우 포커스 시 데이터 자동 재요청 비활성화
    retry: 2, // 실패 시 최대 2번까지 재시도
    refetchInterval: 5000, // 매 5초마다 데이터를 자동으로 다시 가져옴
    onSuccess: (data) => {
      setSamples(data.data); // store의 samples를 업데이트하는 함수
      incrementSampleId(); // store의 sampleId를 업데이트하는 함수
    },
  });
};

export default useSampleData;
