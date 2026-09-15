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

// problem 3 solution
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

// problem 4 solution
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare = 0;

  if (distance > 0) {
    if (distance <= 2) {
      fare = 50;
    }
    if (distance > 2) {
      const fareForFirst2KM = 50;
      const fareAfterFirst2KM = (distance - 2) * 15;
      fare = fareForFirst2KM + fareAfterFirst2KM;
    }

    if (waitingMinutes > 0) {
      const fairForWaiting = waitingMinutes * 2;
      fare += fairForWaiting;
    }

    if (isNight) {
      const extraChargeForNight = (fare * 20) / 100;
      fare += extraChargeForNight;
    }
  }

  return fare;
}
