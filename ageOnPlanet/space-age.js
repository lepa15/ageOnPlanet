const ageOnEarthInSeconds = 31557600;
const agesOnPlanetInEarthsYear = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

export const age = (planet, ageInSeconds) => {
  let ageOnPlanetInSeconds = 0;
  for (const key in agesOnPlanetInEarthsYear) {
    if (planet === key) {
      ageOnPlanetInSeconds = (ageInSeconds / (agesOnPlanetInEarthsYear[key] * ageOnEarthInSeconds)).toFixed(2);
      return Number(ageOnPlanetInSeconds);
    }
  }
  return Number(ageOnPlanetInSeconds);
};
