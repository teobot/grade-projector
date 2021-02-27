export const ReturnYearWorth = (grade, worth) => {
  // Return the year worth
  return parseFloat(((grade / 100) * (worth / 100) * 100).toFixed(1));
};

export const AverageToGetFirst = (year1, year2) => {
  // Returns average needed to get a first
  const TotalToGetFirst =
    70 - ReturnYearWorth(year1.yearGrade, year1.yearWorth);
  const ThirdYearWorth = year2.yearWorth;
  return (TotalToGetFirst / ThirdYearWorth) * 100;
};

export const TotalComplete = (years) => {
  // Returns the total percentage completed
  const secondYearComplete = ReturnYearWorth(
    years[0].yearGrade,
    years[0].yearWorth
  );
  const thirdYearComplete = ReturnYearWorth(
    years[1].yearGrade,
    years[1].yearWorth
  );
  return parseFloat(secondYearComplete + thirdYearComplete);
};

export const CalculateAverageThirdYearGrade = (unitState) => {
  let NumberOfUnits = 0;
  let SumOfUnits = 0;
  Object.keys(unitState).forEach(function (key) {
    SumOfUnits += unitState[key].grade;
    NumberOfUnits += 1;
  });
  return SumOfUnits / NumberOfUnits;
};
