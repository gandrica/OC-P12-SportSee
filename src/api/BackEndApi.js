class BackEndApi {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    this._url = url;
  }

  async getData() {
    try {
      const res = await fetch(this._url);
      const data = await res.json();
      return data.data;
    } catch (err) {
      console.log("an error occurs", err);
    }
  }
}

export default BackEndApi;
