import { useSelector } from 'react-redux';
import { IState } from '../interfaces';

export const useAppSelector = <TValue>(selector: (state: IState) => any): TValue => {
    return useSelector(state => selector(state as IState)) as TValue;
}