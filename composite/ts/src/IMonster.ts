export default interface IMonster {
    attack(): void;
    takeDamage(damageValue: number): void;
    getMaxHealth(): number;
    getHealth(): number;
    printHealth(): void;
    onDefeat(): void;
}
