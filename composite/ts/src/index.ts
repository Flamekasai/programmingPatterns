import BodyPart from './BodyPart';
import Dragon from './Dragon'

let dragon = new Dragon();

let head = new BodyPart(
    "Head",
    400,
    "Fire comes from it's mouth burning everything on sight",
    "You've decapitated the dragon, hurray!"
);

dragon.addPart(head);

for (let i = 0; i < 4; i++) {
    let newLeg = new BodyPart(
        "Claw",
        100,
        "It scratches you in the face, it hurts a lot",
        "One leg removed it can't attack with that claw anymore"
    );

    dragon.addPart(newLeg);
}

let tail = new BodyPart(
    "Tail",
    200,
    "It whips with it's tail full of spikes",
    "You cut out it's poisoned tail, a great present for the princess"
);

dragon.addPart(tail);

const intervalID = setInterval(testLoop, 3000);

function testLoop() {
    console.log("\n[DRAGON ATTACKS]");
    dragon.attack();
    console.log("[YOU ATTACK]");
    dragon.takeDamage(Math.floor(Math.random() * 100 + 50));
    console.log("----------------------------------------------------");
    console.log("HEALTH");
    console.log("----------------------------------------------------");
    dragon.printHealth();
    console.log();

    if (dragon.getHealth() <= 0) {
        clearInterval(intervalID);
        dragon.onDefeat();
    }
}
