export class Helper {
  private static uniqueInstance: Helper;

  private constructor() { }

  public static getInstance() {
    if (Helper.uniqueInstance === null) {
      Helper.uniqueInstance = new Helper();
      return Helper.uniqueInstance;
    };
    return Helper.uniqueInstance;
  }
}