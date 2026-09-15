// problem 1 solution
function describeValue(value) {
  return `${typeof value} | ${value ? "truthy" : "falsy"}`;
}

// problem 2 solution
function getDayType(day) {
  switch (day.toLowerCase()) {
    case "saturday":
      return "Weekend";
      break;

    case "sunday":
      return "Working Day";
      break;

    case "monday":
      return "Working Day";
      break;

    case "tuesday":
      return "Working Day";
      break;

    case "wednesday":
      return "Working Day";
      break;

    case "thursday":
      return "Working Day";
      break;

    case "friday":
      return "Weekend";
      break;

    default:
      return "Invalid Day";
  }
}
