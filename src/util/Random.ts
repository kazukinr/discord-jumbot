export class Random {

    public static nextInt(n: number): number {
        return Math.floor(Math.random() * n);
    }
}