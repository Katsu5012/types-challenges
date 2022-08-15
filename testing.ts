class Weight {
  readonly value!: number;

  constructor(value: number) {
    this.value = value;
  }
}

class Height {
  readonly value!: number;

  constructor(value: number) {
    this.value = value;
  }
}

class Head {
  readonly value!: number;

  constructor(value: number) {
    this.value = value;
  }
}

class Body {
  readonly value!: number;

  constructor(value: number) {
    this.value = value;
  }
}

const inputs = {
  weight: 60,
  height: 150,
  head: 30,
  body: 70,
};

const transformToShosu = (value: number): number => {
  return Math.floor(value * 100) / 100;
};
