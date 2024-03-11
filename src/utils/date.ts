export const getKoreanHour = (utc: number) => {
  const date = new Date(utc * 1000);

  const koreanTime = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  let hours = koreanTime.getUTCHours().toString().padStart(2, "0");
  hours = parseInt(hours) + "";
  return hours;
};
