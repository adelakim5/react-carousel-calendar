export const getInitialDate = () => {
  const monthForChange = new Date().getMonth();
  const queue = [];
  for (let i = -1; i < 3; i++) {
    const currDate = new Date();
    currDate.setDate(1);
    currDate.setFullYear(currDate.getFullYear(), monthForChange + i);
    queue.push(currDate);
  }
  return queue;
};

export const getFirstDay = (yy, mm) => new Date(yy, mm, 1);

export const getLastDay = (yy, mm) => new Date(yy, mm + 1, 0);

export const loadYYMM = (fullDate) => {
  const yy = fullDate.getFullYear();
  const mm = fullDate.getMonth();
  const firstDay = getFirstDay(yy, mm);
  const lastDay = getLastDay(yy, mm);

  const table = [];
  let startCount = 0;
  let countDay = 0;
  for (let i = 0; i < 6; i++) {
    const tbody = [];
    if (i === 5 && startCount === 0) break; // 5주짜리인지 6주짜리인지 확인
    for (let j = 0; j < 7; j++) {
      if (i === 0 && !startCount && j === firstDay.getDay()) startCount = 1;
      const tdObj = {
        classNames: [],
        dataSets: [],
        countDay: 0,
      };
      if (startCount) {
        const classNames = ["day"];
        const dataSets = [`${countDay + 1}`, `${fullDate}`];
        tdObj.classNames = [...classNames];
        tdObj.dataSets = [...dataSets];
        tdObj.countDay = ++countDay;
      }
      if (countDay === lastDay.getDate()) startCount = 0;
      tbody.push(tdObj);
    }
    table.push(tbody);
  }
  return table;
};
