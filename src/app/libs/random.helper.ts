export class RandomHelper {
  public static generateRandomNumber(min:number, max: number): number {
    return Math.floor(Math.random() * (max - 1 + min)) + min;
  }
}
