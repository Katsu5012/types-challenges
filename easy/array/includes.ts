type Includes<T extends unknown[], K extends unknown> = K extends T[number]
  ? true
  : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "a">;
