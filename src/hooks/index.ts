import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '@/slices/store.ts';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
