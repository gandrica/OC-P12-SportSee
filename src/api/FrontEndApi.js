class FrontEndApi {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    this._url = url;
    this._id = +this._url.slice(27, 29);
    this._data = null;
  }

  async getData() {
    try {
      const res = await fetch("../../public/data/data.json");
      const userData = await res.json();
      this._data = { ...userData };
    } catch (err) {
      console.log("an error occurs", err);
    }
  }
  verifyUrl() {
    if (this._url.slice(0, 27) !== "http://localhost:5173/user/") {
      throw "Wrong adress";
    }
  }

  async getUserData(property) {
    this.verifyUrl();
    await this.getData();
    return this._data[`${property}`].filter(
      (data) => data.id === this._id || data.userId === this._id,
    );
  }
}

export default FrontEndApi;
