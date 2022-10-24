const date = new Date().toDateString();
export const day = date.substring(0, 3);
export const month = date.substring(4, 8);
export const dayNum = date.substring(8, 10);
export const year = date.substring(10, 15);
export const today = month + dayNum + ',' + year;
