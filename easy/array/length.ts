type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

export type ArrayLength<T extends unknown[]> = T["length"];

type teslaLength = ArrayLength<tesla>; // expected 4
type spaceXLength = ArrayLength<spaceX>; // expected 5
