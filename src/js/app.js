import Bowman from './bowman';
import Swordsman from './swordsman';
import Magician from './magician';
import Daemon from './daemon';
import Undead from './undead';
import Zombie from './zombie';

const bowman = new Bowman('Alex');
const swordsman = new Swordsman('Sergey');
const magician = new Magician('Jon');
const daemon = new Daemon('Oleg');
const undead = new Undead('Pavel');
const zombie = new Zombie('Albert');

console.log(bowman);
console.log(swordsman);
console.log(magician);
console.log(daemon);
console.log(undead);
console.log(zombie);

/* Задание №2 */
zombie.levelUp();
console.log('zombie levelUp');
console.log(zombie);

zombie.damage(50);
console.log('zombie damage 50');
console.log(zombie);