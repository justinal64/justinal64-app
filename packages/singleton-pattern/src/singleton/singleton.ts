// interface Test {
//   getInstance: () => void;
//   getCount: () => number;
//   increment: () => void;
//   decrement: () => void;
// }

// let instance: this;
let instance: any;
let counter = 0;

class Counter {
  constructor() {
    // this ensures that only one instance can be created(that's why they call it a SINGLEton)
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  // getCounter1 = () => {
  //   return this.counter;
  // };

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

// const counter1 = new Counter();
// const counter2 = new Counter();

Object.freeze(Counter); // This ensures the singleton can't be modified
export { Counter };
