import { AxiosError } from 'axios';

const useErrorHandle = () => {
  const handle = (error: AxiosError) => {
    
    console.error('ERR', error)

  };

  return {
    handle,
  };
};

export default useErrorHandle;
