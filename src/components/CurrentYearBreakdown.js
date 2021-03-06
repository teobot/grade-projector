import React, { useContext } from "react";

// component imports
import { Table } from "semantic-ui-react";

// function imports
import {
  ReturnYearWorth,
  AverageToGetFirst,
  TotalComplete,
} from "../functions/functions";

// data imports
import { DataContext } from "../data/data";

export default function CurrentYearBreakdown() {
  // This method displays a table showing the current year broken down 

  // context imports
  const { yearState } = useContext(DataContext);

  return (
    <Table
      inverted
      color="green"
      celled
      fixed
      textAlign="center"
      className="CustomTable"
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Total To Get First</Table.HeaderCell>
          <Table.HeaderCell>3rd Year Average To Get First</Table.HeaderCell>
          <Table.HeaderCell>Total Achieved</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            {70 -
              ReturnYearWorth(
                yearState.second_year.yearGrade,
                yearState.second_year.yearWorth
              )}
            %
          </Table.Cell>
          <Table.Cell>
            {AverageToGetFirst(yearState.second_year, yearState.third_year)}%
          </Table.Cell>
          <Table.Cell>
            {TotalComplete([yearState.second_year, yearState.third_year])}%
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
