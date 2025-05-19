export type AttractionsTime = {
  start: string;
  end: string;
};

export type AttractionsWorkHours = {
  day: string;
  time: AttractionsTime | null;
};
