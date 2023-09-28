export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (
      this.constructor !== Building &&
      this.evacuationWarningMessage === undefined
    ) {
      throw new Error(
        "Class extending Building must override evacuationWarningMessage"
      );
    } else if (
      this.constructor !== Building &&
      typeof this.evacuationWarningMessage !== "function"
    ) {
      throw Error(
        "Class extending Building must override evacuationWarningMessage"
      );
    }
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
