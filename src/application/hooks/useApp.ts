import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { setLoading, setError } from '../slices/appSlice';

export const useApp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector((state: RootState) => state.app.isLoading);
  const error = useSelector((state: RootState) => state.app.error);

  const handleLoading = (status: boolean) => {
    dispatch(setLoading(status));
  };

  const handleError = (message: string | null) => {
    dispatch(setError(message));
  };

  return {
    isLoading,
    error,
    handleLoading,
    handleError,
  };
};
