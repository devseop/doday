// 헤더용 날짜
export const date = new Date().toDateString();
export const day = date.substring(0, 3);
export const month = date.substring(4, 8);
export const dayNum = date.substring(8, 10);
export const year = date.substring(10, 15);
export const today = month + dayNum + ',' + year;

// 이벤트 생성용 날짜
export const krDate = new Date().toLocaleString().slice(0, 14);
export const krYear = krDate.slice(0, 4);
export const krMonth = krDate.slice(6, 8);
export const krDay = krDate.slice(10, 12);
export const krToday = krYear + '/' + krMonth + '/' + krDay;
