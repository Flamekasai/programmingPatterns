import IMonster from "./IMonster";

export default class Dragon implements IMonster {
    parts: IMonster[] = [];

    addPart(newPart: IMonster) {
        this.parts.push(newPart);
    }

    removePart(partToRemove: IMonster) {
        this.parts = this.parts.filter((currentPart) => {
            currentPart != partToRemove
        });
    }

    attack() {
        if (this.parts.length == 0)
            return;

        let randomIndex = this.getRandomIndex();
        this.parts[randomIndex].attack();
    }

    takeDamage(damageValue: number): void {
        if (this.parts.length == 0)
            return;

        let randomIndex = this.getRandomIndex();
        this.parts[randomIndex].takeDamage(damageValue);
    }

    getMaxHealth() {
        if (this.parts.length == 0)
            return;

        let result = 0;
        this.parts.forEach((currentPart) => {
            result += currentPart.getMaxHealth();
        });

        return result;
    }

    getHealth() {
        if (this.parts.length == 0)
            return;

        let result = 0;
        this.parts.forEach((currentPart) => {
            result += currentPart.getHealth();
        });

        return result;
    }

    printHealth() {
        console.log(`Dragon: (${this.getHealth()}/${this.getMaxHealth()})`);
        this.parts.forEach(currentPart => {
            currentPart.printHealth();
        });
    }

    onDefeat() {
        console.log("You defeated the evil dragon and saved the day!!!");
    }

    getRandomIndex(): number {
        let randomIndex = -1;
        do {
            randomIndex = Math.random() * this.parts.length;
            randomIndex = Math.floor(randomIndex);
        } while (this.parts[randomIndex].getHealth() == 0);
        return randomIndex;
    }
}
