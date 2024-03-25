/* eslint-disable import/prefer-default-export */
import { SYSTEM_MODE } from '@constants/Constants';
import { ENVMODE, PAGENAMES, ROUTES } from '@enums/CommonEnum';

/* --------------------------------------------------------------- *
 *  하나 또는 여러개 배열들이 빈 배열인지를 확인하는 함수
 *  빈 배열이면 true
 *  ex) if(isArrayEmpty(deptOptions)) return;
 *  ex) if(isArrayEmpty(useYnOptions, procOption)) return;
 *  여러개 배열중 하나만 비어도 true.
 * --------------------------------------------------------------- */
export const isArrayEmpty = (...arrays) => {
  return arrays.some((array) => array == null || (Array.isArray(array) && array.length === 0));
};

export const validateKeys = () => {
  if (SYSTEM_MODE === ENVMODE.PROD) {
    return null;
  }

  // ROUTES에서 PAGENAMES으로의 키 확인
  const routeKeys = Object.keys(ROUTES);
  const pageNameKeysSet = new Set(Object.keys(PAGENAMES));
  const missingInPageNames = routeKeys.filter((key) => !pageNameKeysSet.has(key));

  // PAGENAMES에서 ROUTES로의 키 확인
  const pageNameKeys = Object.keys(PAGENAMES);
  const routeKeysSet = new Set(Object.keys(ROUTES));
  const missingInRoutes = pageNameKeys.filter((key) => !routeKeysSet.has(key));

  // 누락된 키가 있는지 확인하고 콘솔에 오류를 출력.
  if (!isArrayEmpty(missingInPageNames) || !isArrayEmpty(missingInRoutes)) {
    if (!isArrayEmpty(missingInPageNames)) {
      console.error('PAGENAMES 키 누락:', missingInPageNames);
    }
    if (!isArrayEmpty(missingInRoutes)) {
      console.error('ROUTES 키 누락:', missingInRoutes);
    }
    return false;
  }

  return true;
};
