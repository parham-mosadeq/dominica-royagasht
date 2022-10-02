import React, { createContext, useReducer } from 'react';

// *function
import { calculatePrice } from '../services/functions';
const formContext = createContext();

const initState = {
  firstName: '',
  lastName: '',
  isMarried: false,
  isChildrenAboveSixteen: false,
  isChildrenBelowSixteen: false,
  childrenAboveSixteen: 0,
  childrenBelowSixteen: 0,
  isParents: false,
  parentsCount: 0,
  showDetails: 'اطلاعات راوارد کنید',
};

const formReducer = (state, action) => {
  const singlePerson = 120000;
  const marriedPerson = 165000;
  const childrenBelowSixteenPrice = 10000;
  const childrenAboveSixteenPrice = 15000;
  const eachParent = 20000;

  switch (action.type) {
    case 'SUBMIT_FORM':
      return {
        ...state,
        showDetails: calculatePrice(
          state,
          singlePerson,
          marriedPerson,
          childrenBelowSixteenPrice,
          childrenAboveSixteenPrice,
          eachParent
        ),
      };

    // !names start

    case 'FIRST_NAME':
      return {
        ...state,
        firstName: action.payload,
      };

    case 'LAST_NAME':
      return {
        ...state,
        lastName: action.payload,
      };
    // !names end

    // !martial status start
    case 'COUPLE_RADIO':
      return {
        ...state,
        isMarried: action.payload,
      };
    case 'SINGLE_RADIO':
      return {
        ...state,
        isMarried: false,
      };

    // !martial status end

    // !children start
    case 'CHILDREN_ABOVE':
      return {
        ...state,
        isChildrenAboveSixteen: action.payload,
      };

    case 'CHILDREN_BELOW':
      return {
        ...state,
        isChildrenBelowSixteen: action.payload,
      };

    // *children count start

    case 'CHILDREN_ABOVE_COUNT':
      return {
        ...state,
        childrenAboveSixteen: action.payload,
      };

    case 'CHILDREN_BELOW_COUNT':
      return {
        ...state,
        childrenBelowSixteen: action.payload,
      };

    // *children count end

    // !children end

    // !parent start

    case 'PARENT_CHECKBOX':
      return {
        ...state,
        isParents: action.payload,
      };
    case 'PARENT_COUNT':
      return {
        ...state,
        parentsCount: action.payload,
      };

    // !parent end
    default:
      return state;
  }
};
const FormController = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initState);

  return (
    <formContext.Provider value={{ state, dispatch }}>
      {children}
    </formContext.Provider>
  );
};

export { FormController, formContext };
