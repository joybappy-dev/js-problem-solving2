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

// problem 2 solution
function validateUsername(username) {
  const usernameLower = username.toLowerCase();

  if (usernameLower.length < 4) {
    return "Too Short";
  }
  if (usernameLower.includes(" ")) {
    return "No Space Allowed";
  }
  if (usernameLower.includes("admin")) {
    return "Reserved Word";
  } else {
    return "Available";
  }
}
