import { createContext, useReducer, useEffect } from "react";
import { CalculateAverageThirdYearGrade } from "../functions/functions";
import cookieHelper from "../helpers/cookieHelper";

export const DataContext = createContext();

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  // This is the data context hook

  // UnitDispatcher({ type: set_(se_frameworks || enterprise_programming || mobile_development || project)_grade, payload: GRADE })
  const unitReducer = (state, action) => {
    switch (action.type) {
      case "set_se_frameworks_grade":
        return {
          ...state,
          se_frameworks: { ...state.se_frameworks, grade: action.payload },
        };
      case "set_enterprise_programming_grade":
        return {
          ...state,
          enterprise_programming: {
            ...state.enterprise_programming,
            grade: action.payload,
          },
        };
      case "set_mobile_development_grade":
        return {
          ...state,
          mobile_development: {
            ...state.mobile_development,
            grade: action.payload,
          },
        };
      case "set_project_grade":
        return {
          ...state,
          project: { ...state.project, grade: action.payload },
        };
      case "load_units":
        return { ...state, state: action.payload };
      default:
        return state;
    }
  };

  // YearDispatcher({ type: set_(year2 || year3)_grade, payload: GRADE })
  // YearDispatcher({ type: set_(year2 || year3)_worth, payload: WORTH })
  const yearReducer = (state, action) => {
    switch (action.type) {
      case "set_year2_grade":
        return {
          ...state,
          second_year: { ...state.second_year, yearGrade: action.payload },
        };
      case "set_year2_worth":
        return {
          ...state,
          second_year: { ...state.second_year, yearWorth: action.payload },
        };
      case "set_year3_grade":
        return {
          ...state,
          third_year: { ...state.third_year, yearGrade: action.payload },
        };
      case "set_year3_worth":
        return {
          ...state,
          third_year: { ...state.third_year, yearWorth: action.payload },
        };
      case "load_years":
        return { ...state, state: action.payload };
      default:
        return state;
    }
  };

  const units = {
    se_frameworks: {
      title: "SE Frameworks",
      grade: cookieHelper.checkCookieExists("se_frameworks")
        ? parseInt(cookieHelper.getCookie("se_frameworks"))
        : 0,
      dispatch_name: "se_frameworks",
    },
    enterprise_programming: {
      title: "Enterprise Programming",
      grade: cookieHelper.checkCookieExists("enterprise_programming")
        ? parseInt(cookieHelper.getCookie("enterprise_programming"))
        : 0,
      dispatch_name: "enterprise_programming",
    },
    mobile_development: {
      title: "Mobile Development",
      grade: cookieHelper.checkCookieExists("mobile_development")
        ? parseInt(cookieHelper.getCookie("mobile_development"))
        : 0,
      dispatch_name: "mobile_development",
    },
    project: {
      title: "Project",
      grade: cookieHelper.checkCookieExists("project")
        ? parseInt(cookieHelper.getCookie("project"))
        : 0,
      dispatch_name: "project",
    },
  };

  const years = {
    second_year: {
      yearTitle: "2nd",
      yearGrade: cookieHelper.checkCookieExists("year2Grade")
        ? parseInt(cookieHelper.getCookie("year2Grade"))
        : 0,
      yearWorth: cookieHelper.checkCookieExists("year2Worth")
        ? parseInt(cookieHelper.getCookie("year2Worth"))
        : 50,
      yearDispatchName: "year2",
      editable: true,
    },
    third_year: {
      yearTitle: "3nd",
      yearGrade: CalculateAverageThirdYearGrade(units),
      yearWorth: cookieHelper.checkCookieExists("year3Worth")
        ? parseInt(cookieHelper.getCookie("year3Worth"))
        : 50,
      yearDispatchName: "year3",
      editable: false,
    },
  };

  const [unitState, UnitDispatcher] = useReducer(unitReducer, units);
  const [yearState, YearDispatcher] = useReducer(yearReducer, years);

  // // context imports
  // const { unitState, UnitDispatcher, yearState, YearDispatcher } = useContext(
  //   DataContext
  // );

  useEffect(() => {
    YearDispatcher({
      type: "set_year3_grade",
      payload: CalculateAverageThirdYearGrade(unitState),
    });
  }, [unitState]);

  return [{ unitState, UnitDispatcher, yearState, YearDispatcher }];
};
