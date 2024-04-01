// src/store/menuStore.js
import { ROUTES } from '@enums/CommonEnum';
import { create } from 'zustand';

// 메뉴 데이터를 포함하는 스토어 생성
const useNavStore = create(() => ({
  menus: [
    { path: ROUTES.AAA, title: '냠둘러보기' },
    { path: ROUTES.BBB, title: '냠냠토크' },
    { path: ROUTES.USERACTIVITY, title: '냠관리' },
    { path: ROUTES.RECRUIT, title: '냠메이트 모집하기' },
    { path: ROUTES.SAMPLE2, title: '샘플2' },
  ],
}));

export default useNavStore;
