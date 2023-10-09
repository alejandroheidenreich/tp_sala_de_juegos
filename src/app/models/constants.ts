export const START_COUNT = 2;

export enum COLORS {
    red,
    green,
    blue,
    yellow,
}

export const sleep = async (time: number) => {
    return new Promise(res => setTimeout(res, time))
}
