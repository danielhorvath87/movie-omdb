import { EffectCallback, useEffect } from 'react';

function useEffectOnce(fn: EffectCallback) {
  // eslint-disable-next-line
  return useEffect(fn, []);
}

export default useEffectOnce;
