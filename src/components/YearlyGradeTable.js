import React, { useContext } from "react";

// component imports
import { Container, Table, Input } from "semantic-ui-react";

import cookieHelper from "../helpers/cookieHelper"

// function imports
import {
  ReturnYearWorth,
  AverageToGetFirst,
  TotalComplete,
} from "../functions/functions";

// data imports
import { DataContext } from "../data/data";

export default function YearlyGradeTable() {
  // This table displays the yearly breakdown

  // context imports
  const { unitState, UnitDispatcher, yearState, YearDispatcher } = useContext(
    DataContext
  );

  const GenerateYearlyBreakdown = () => {
    let yearArray = [];
    Object.keys(yearState).forEach(function (key) {
      yearArray.push(yearState[key]);
    });
    return yearArray;
  };

  const ChangeYearWorth = (event, data, year) => {
    cookieHelper.setCookie(`${year.yearDispatchName}Worth`, data.value)
    YearDispatcher({
      type: `set_${year.yearDispatchName}_worth`,
      payload: parseInt(data.value),
    });
  };

  const ChangeYearGrade = (event, data, year) => {
    cookieHelper.setCookie(`${year.yearDispatchName}Grade`, data.value)
    YearDispatcher({
      type: `set_${year.yearDispatchName}_grade`,
      payload: data.value ? parseInt(data.value) : 0,
    });
  };

  return (
    <Table
      inverted
      color="red"
      celled
      fixed
      textAlign="center"
      className="CustomTable"
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Year</Table.HeaderCell>
          <Table.HeaderCell>Average Year Grade</Table.HeaderCell>
          <Table.HeaderCell>Year Worth</Table.HeaderCell>
          <Table.HeaderCell>Complete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {GenerateYearlyBreakdown().map((year) => (
          <Table.Row>
            <Table.Cell>{year.yearTitle}</Table.Cell>
            <Table.Cell>
              {year.editable ? (
                <Input
                  icon="edit"
                  iconPosition="left"
                  type="number"
                  min={0}
                  max={100}
                  onChange={(event, data) => ChangeYearGrade(event, data, year)}
                  fluid
                  placeholder={`${year.yearGrade}%`}
                />
              ) : (
                `${year.yearGrade}%`
              )}
            </Table.Cell>
            <Table.Cell>
              <Input
                icon="edit"
                iconPosition="left"
                type="number"
                min={0}
                max={100}
                onChange={(event, data) => ChangeYearWorth(event, data, year)}
                fluid
                placeholder={`${year.yearWorth}%`}
              />
            </Table.Cell>
            <Table.Cell>
              {ReturnYearWorth(year.yearGrade, year.yearWorth)}%
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
