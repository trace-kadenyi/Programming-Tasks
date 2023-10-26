// Write a program that allows a user to calculate how many milliliters (ml) of their glass of syrup they
// need to replace (with water or syrup) to achieve the recommended dilution as indicated on the sirup
// bottle. The user can enter the amount of syrup in their glass (e.g. 200 ml), its dilution (e.g. 25 %) and
// the recommended dilution (e.g. 20 %).
// The program should then tell the user how many milliliters to replace with water or syrup. For
// example: "Replace 40 ml of your syrup with water."

const findDilution = (syrup, currentDilution, recommendedDilution) => {
  // handle the edge cases
  if (
    !syrup ||
    !currentDilution ||
    !recommendedDilution ||
    syrup <= 0 ||
    typeof syrup === "string" ||
    currentDilution < 0 ||
    typeof currentDilution === "string" ||
    recommendedDilution < 0 ||
    typeof recommendedDilution === "string"
  ) {
    return "You must enter a positive numeral value for all the paremeters. Please try again.";
  }

  // convert the currentDilution and recommendedDilution to ml
  currentDilution = (currentDilution / 100) * syrup;
  recommendedDilution = (recommendedDilution / 100) * syrup;

  if (currentDilution > recommendedDilution) {
    return `Replace ${(currentDilution - recommendedDilution).toFixed(
      2
    )}ml of your syrup with water.`;
  } else if (recommendedDilution > currentDilution) {
    return `Replace ${(recommendedDilution - currentDilution).toFixed(
      2
    )}ml of your syrup with syrup.`;
  } else {
    return "Your syrup is well diluted as per the recommended dilution.";
  }
};

// console.log(findDilution(267, 20, 15));
