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

  // new functions start

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


if (firstName && lastName && isMarried && isParents && isChildrenBelowSixteen) {

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

  // new functions start end

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
