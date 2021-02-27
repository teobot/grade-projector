import React from "react";

// css import
// import "../css/App.css";

// semantic imports
import { Container, Divider } from "semantic-ui-react";

// custom component imports
import YearlyGradeTable from "../components/YearlyGradeTable";
import CurrentYearBreakdown from "../components/CurrentYearBreakdown";
import ThirdYearUnitTable from "../components/ThirdYearUnitTable";

// context imports
import DataHook, { DataContext } from "../data/data";

export default function App() {
  const [DataValues] = DataHook();
  return (
    <DataContext.Provider value={DataValues}>
      <Container>
        <Divider section hidden />

        {/* This table is the yearly grade table */}
        <YearlyGradeTable />

        <Divider section hidden />

        {/* This table is the year target table */}
        <CurrentYearBreakdown />

        <Divider section hidden />

        {/* This table is the third year unit table */}
        <ThirdYearUnitTable />
      </Container>
    </DataContext.Provider>
  );
}
