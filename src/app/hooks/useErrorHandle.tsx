import { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';

const useErrorHandle = () => {
  const handle = (error: AxiosError) => {
    const { response } = error;
    const { data } = response as AxiosResponse

    toast.error(data.Error)
  };

  return {
    handle,
  };
};

export default useErrorHandle;
