import { Element } from '../types';

export const fixBoron = (arr: Element[]) => {
    let index = 4;

    if (arr[4].name !== 'Boron') {
        index = arr.findIndex((element) => element.name === 'Boron');
    }

    arr[index].period = 2;
};
