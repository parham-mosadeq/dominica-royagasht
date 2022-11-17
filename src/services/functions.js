const toLocale = (number) => {
  return number.toLocaleString();
};

const calculatePrice = (
  state,
  singlePerson,
  marriedPerson,
  childrenBelowSixteenPrice,
  childrenAboveSixteenPrice,
  eachParent
) => {
  let {
    firstName,
    lastName,
    isMarried,
    isChildrenAboveSixteen,
    isChildrenBelowSixteen,
    childrenAboveSixteen,
    childrenBelowSixteen,
    isParents,
    parentsCount,
    showDetails,
  } = state;

  if (
    !firstName &&
    !lastName &&
    !isMarried &&
    !isParents &&
    !isChildrenAboveSixteen &&
    !isChildrenBelowSixteen
  ) {
    return showDetails;
  }

  // *new functions for single status start

  // for children above&under 16 and parents
  if (
    firstName &&
    lastName &&
    !isMarried &&
    isChildrenBelowSixteen &&
    isChildrenAboveSixteen &&
    isParents
  ) {
    showDetails = ` ${firstName} ${lastName} ${toLocale(
      childrenBelowSixteenPrice * +childrenBelowSixteen +
        childrenAboveSixteenPrice * +childrenAboveSixteen +
        singlePerson +
        eachParent * +parentsCount
    )}$`;
    return showDetails;
  }
  // for parents and above 16
  if (
    firstName &&
    lastName &&
    !isMarried &&
    isChildrenAboveSixteen &&
    isParents
  ) {
    showDetails = ` ${firstName} ${lastName} ${toLocale(
      childrenAboveSixteenPrice * +childrenAboveSixteen +
        singlePerson +
        eachParent * +parentsCount
    )}$`;
    return showDetails;
  }
  // for parents and under 16
  if (
    firstName &&
    lastName &&
    !isMarried &&
    isChildrenBelowSixteen &&
    isParents
  ) {
    showDetails = ` ${firstName} ${lastName} ${toLocale(
      childrenBelowSixteenPrice * +childrenBelowSixteen +
        singlePerson +
        eachParent * +parentsCount
    )}$`;
    return showDetails;
  }

  // single and parents
  if (firstName && lastName && !isMarried && isParents) {
    showDetails = ` ${firstName} ${lastName} ${toLocale(
      singlePerson + eachParent * +parentsCount
    )}$`;
    return showDetails;
  }

  // for children under&above 16
  if (
    firstName &&
    lastName &&
    !isMarried &&
    isChildrenBelowSixteen &&
    isChildrenAboveSixteen
  ) {
    console.log(123);
    showDetails = ` ${firstName} ${lastName} ${toLocale(
      childrenBelowSixteenPrice * +childrenBelowSixteen +
        childrenAboveSixteenPrice * +childrenAboveSixteen +
        singlePerson
    )}$`;
    return showDetails;
  }

  // for children above 16
  if (firstName && lastName && !isMarried && isChildrenAboveSixteen) {
    showDetails = ` ${firstName} ${lastName} ${toLocale(
      childrenAboveSixteenPrice * +childrenAboveSixteen + singlePerson
    )}$`;
    return showDetails;
  }
  // for children under 16
  if (firstName && lastName && !isMarried && isChildrenBelowSixteen) {
    showDetails = ` ${firstName} ${lastName} ${toLocale(
      childrenBelowSixteenPrice * +childrenBelowSixteen + singlePerson
    )}$`;
    return showDetails;
  }

  // !new functions for single status end

  // *new functions start

  if (
    firstName &&
    lastName &&
    isMarried &&
    isChildrenBelowSixteen &&
    isChildrenAboveSixteen
  ) {
    showDetails = ` ${firstName} ${lastName} ${toLocale(
      childrenAboveSixteenPrice * +childrenAboveSixteen +
        childrenBelowSixteenPrice * +childrenBelowSixteen +
        eachParent * +parentsCount +
        marriedPerson
    )}$`;
    return showDetails;
  }

  if (
    firstName &&
    lastName &&
    isMarried &&
    isParents &&
    isChildrenBelowSixteen
  ) {
    showDetails = ` ${firstName} ${lastName} ${toLocale(
      childrenBelowSixteenPrice * +childrenBelowSixteen +
        eachParent * +parentsCount +
        marriedPerson
    )}$`;
    return showDetails;
  }

  if (firstName && lastName && isMarried && isParents) {
    showDetails = ` ${firstName} ${lastName} ${toLocale(
      eachParent * +parentsCount + marriedPerson
    )}$`;
    return showDetails;
  }

  if (firstName && lastName && isMarried && isChildrenBelowSixteen) {
    showDetails = ` ${firstName} ${lastName} ${toLocale(
      childrenBelowSixteenPrice * +childrenBelowSixteen +
        eachParent * +parentsCount +
        marriedPerson
    )}$`;
    return showDetails;
  }

  // !new functions start end

  if (
    firstName &&
    lastName &&
    isMarried &&
    isChildrenAboveSixteen &&
    isChildrenBelowSixteen &&
    isParents
  ) {
    showDetails = ` ${firstName} ${lastName} ${toLocale(
      childrenAboveSixteenPrice * +childrenAboveSixteen +
        childrenBelowSixteenPrice * +childrenBelowSixteen +
        eachParent * +parentsCount +
        marriedPerson
    )}$`;
    return showDetails;
  }

  if (
    firstName &&
    lastName &&
    isMarried &&
    isChildrenAboveSixteen &&
    isChildrenBelowSixteen
  ) {
    showDetails = `${firstName} ${lastName}  ${toLocale(
      childrenAboveSixteenPrice * parseInt(childrenAboveSixteen) +
        childrenBelowSixteenPrice * parseInt(childrenBelowSixteen) +
        marriedPerson
    )}$`;
    return showDetails;
  }

  if (firstName && lastName && isMarried && isChildrenAboveSixteen) {
    showDetails = ` ${firstName} ${lastName}  ${toLocale(
      childrenAboveSixteenPrice * +parseInt(childrenAboveSixteen) +
        marriedPerson
    )}$`;
    return showDetails;
  }

  if (firstName && lastName && isMarried) {
    showDetails = `${firstName} ${lastName}  ${toLocale(marriedPerson)}$`;
    return showDetails;
  }

  if (firstName && lastName && !isMarried) {
    showDetails = ` ${firstName} ${lastName} ${toLocale(singlePerson)}$`;
    return showDetails;
  }
};

export { calculatePrice };
