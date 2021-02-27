import React, { useContext, useEffect } from "react";

// component imports
import { Table, Input } from "semantic-ui-react";

// function imports
import {
  ReturnYearWorth,
  AverageToGetFirst,
  TotalComplete,
  CalculateAverageThirdYearGrade,
} from "../functions/functions";

import cookieHelper from "../helpers/cookieHelper"

// data imports
import { DataContext } from "../data/data";

export default function ThirdYearUnitTable() {
  // context imports
  const { unitState, UnitDispatcher, yearState, YearDispatcher } = useContext(
    DataContext
  );

  const GenerateUnitRows = () => {
    let unitArray = [];
    Object.keys(unitState).forEach(function (key) {
      unitArray.push(unitState[key]);
    });
    return unitArray;
  };

  const CalculateGradeNeeded = () => {
    let avgToFirst = AverageToGetFirst(
      yearState.second_year,
      yearState.third_year
    );
    let DiffSum = 0;
    let GradedTotal = 0;
    Object.keys(unitState).forEach(function (key) {
      if (unitState[key].grade !== 0) {
        DiffSum = DiffSum + (avgToFirst - unitState[key].grade);
        GradedTotal += 1;
      }
    });
    return (avgToFirst + DiffSum / GradedTotal).toFixed(1);
  };

  const ChangeUnitGrade = (event, data, unit) => {
    cookieHelper.setCookie(unit.dispatch_name, data.value)
    UnitDispatcher({
      type: `set_${unit.dispatch_name}_grade`,
      payload: data.value ? parseInt(data.value) : 0,
    });
  };

  return (
    <Table
      inverted
      color="blue"
      celled
      fixed
      textAlign="center"
      className="CustomTable"
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Grade</Table.HeaderCell>
          <Table.HeaderCell>Grade Needed</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {GenerateUnitRows().map((unit) => (
          <Table.Row>
            <Table.Cell>{unit.title}</Table.Cell>
            <Table.Cell>
              <Input
                icon="edit"
                iconPosition="left"
                type="number"
                min={0}
                max={100}
                onChange={(event, data) => ChangeUnitGrade(event, data, unit)}
                fluid
                placeholder={`${unit.grade ? unit.grade : 0}%`}
              />
            </Table.Cell>
            <Table.Cell>
              {unit.grade !== 0
                ? "passed"
                : TotalComplete([yearState.second_year, yearState.third_year]) >
                  70
                ? `> 40% (${CalculateGradeNeeded(unit.grade)}%)`
                : `${CalculateGradeNeeded(unit.grade)}%`}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
