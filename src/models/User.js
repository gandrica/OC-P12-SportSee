class User {
  constructor(mainData, activityData, averageSessionsData, performanceData) {
    this._firstName = mainData?.userInfos?.firstName || "";
    this._keyData =
      {
        calorieCount: mainData?.keyData?.calorieCount || 0,
        carbohydrateCount: mainData?.keyData?.carbohydrateCount || 0,
        lipidCount: mainData?.keyData?.lipidCount || 0,
        proteinCount: mainData?.keyData?.proteinCount || 0,
      } || {};

    this._activitySessions = activityData?.sessions || [];
    this._averageSessions = averageSessionsData?.sessions || [];

    this._performance = [
      { kind: performanceData?.kind || [], data: performanceData?.data || [] },
    ];
    this._score = (mainData?.score || mainData?.todayScore) * 100 || 0;
  }

  transformData(data) {
    const dataTransfromed = data.map((item) => {
      return {
        value: item.value,
        kind: this._performance[0]?.kind[item.kind],
      };
    });
    [dataTransfromed[0], dataTransfromed[4]] = [
      dataTransfromed[4],
      dataTransfromed[0],
    ];
    [dataTransfromed[1], dataTransfromed[3]] = [
      dataTransfromed[3],
      dataTransfromed[1],
    ];
    return dataTransfromed;
  }

  get firstName() {
    return this._firstName;
  }

  get keyData() {
    return this._keyData;
  }

  get activitySessions() {
    return this._activitySessions;
  }
  get averageSessions() {
    return this._averageSessions;
  }
  get performance() {
    return this.transformData(this._performance[0]?.data);
  }
  get mainData() {
    return this._mainData;
  }
  get score() {
    return this._score;
  }
}
export default User;
