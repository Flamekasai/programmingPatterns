import IMonster from "./IMonster";

export default class BodyPart implements IMonster {
    private maxHealth: number;
    private currentHealth: number;
    private name: string;
    private attackMessage: string;
    private defeatMessage: string;

    constructor(name: string, maxHealth: number, attackMessage: string, defeatMessage: string) {
        this.name = name;
        this.maxHealth = maxHealth;
        this.currentHealth = maxHealth;
        this.attackMessage = attackMessage;
        this.defeatMessage = defeatMessage;
    }

    getMaxHealth() {
        return this.maxHealth;
    }

    getHealth(): number {
        return this.currentHealth;
    }

    takeDamage(damageValue: number): void {
        this.currentHealth -= damageValue;

        if (this.currentHealth <= 0) {
            this.currentHealth = 0;
            this.onDefeat();
        } else {
            console.log(`\t${this.name} has been injured`);
        }

    }

    printHealth(): void {
        if (this.currentHealth == 0)
            console.log(`${this.name}: [DEFEATED]`)
        else
            console.log(`${this.name}: (${this.currentHealth}/${this.maxHealth})`);
    }

    attack() {
        console.log(`\t${this.attackMessage}`);
    }

    onDefeat() {
        console.log(`\t${this.defeatMessage}`);
    }
}
