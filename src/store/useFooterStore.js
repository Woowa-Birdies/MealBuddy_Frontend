import { ROUTES } from '@enums/CommonEnum';
import { create } from 'zustand';

const useFooterStore = create(() => ({
  footerData: [
    {
      title: 'Section1',
      items: [{ content: '냠메이트 정보', to: ROUTES.AAA, type: 'link' }],
      type: 'label',
    },
    {
      title: 'Section2',
      items: [
        { content: '공지사항', to: ROUTES.SAMPLE1, type: 'link' },
        { content: '자주 묻는 질문', to: ROUTES.SAMPLE2, type: 'link' },
      ],
      type: 'paragraphy',
    },
    {
      title: 'Section3',
      items: [
        { content: '개인정보 처리 방침', to: ROUTES.SAMPLE1, type: 'link' },
        { content: '서비스 이용 약관', to: ROUTES.SAMPLE2, type: 'link' },
      ],
      type: 'paragraphy',
    },
  ],
}));

export default useFooterStore;
