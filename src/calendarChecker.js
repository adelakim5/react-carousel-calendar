export const getDateSum = ({ year, month, day }) => {
  return year * 365 + month * 31 + day;
};

export const isBefore = (targetDateSum, criterionDateSum) => {
  return targetDateSum <= criterionDateSum;
};

export const isPossibleToCheckDate = (dataSets) => {
  const today = new Date();

  if (!dataSets || !dataSets.length) return true;
  const targetDate = new Date(dataSets[1]);
  const targetDateSum = getDateSum({
    year: targetDate.getFullYear(),
    month: targetDate.getMonth() + 1,
    day: Number(dataSets[0]),
  });
  const todaySum = getDateSum({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
  });
  return isBefore(todaySum, targetDateSum);
};
