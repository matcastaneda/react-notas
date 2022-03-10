const DATE_UNIT = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};

export const getUnitValueDate = secondsElapsed => {
  const entries = Object.entries(DATE_UNIT);

  for (const [unit, secondsUnit] of entries) {
    const match = secondsElapsed >= secondsUnit || unit === 'second';
    if (match) {
      const value = Math.floor(secondsElapsed / secondsUnit) * -1;
      return { value, unit };
    }
  }
};
