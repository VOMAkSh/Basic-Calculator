import { observable, action, computed } from "mobx";

class CounterStore {
  @observable displayValue = "0";

  @action enterValueToDisplay = value => {
    if (value === "CE") {
      this.displayValue = "0";
    } else if (value === "=") {
      // eslint-disable-next-line
      this.displayValue = eval(this.displayValue);
    } else {
      if (this.displayValue === "0") {
        this.displayValue = value;
      } else {
        this.displayValue += value;
      }
    }
  };

  @computed get display() {
    return this.displayValue;
  }
}

const store = new CounterStore();
export default store;
