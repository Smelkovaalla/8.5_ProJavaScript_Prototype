import Character from '../character';
import Bowman from '../bowman';
import Zombie from '../zombie';
import Daemon from '../daemon';
import Magician from '../magician';
import Undead from '../undead';
import Swordsman from '../swordsman';

test('Bowman', () => {
  const values = {
    name: 'ALex',
    type: 'Bowman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };

  const result = new Bowman('ALex');

  expect(result).toEqual(values);
});

test('Daemon', () => {
  const values = {
    name: 'Oleg',
    type: 'Daemon',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };

  const result = new Daemon('Oleg');

  expect(result).toEqual(values);
});

test('Magician', () => {
  const values = {
    name: 'Jon',
    type: 'Magician',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };

  const result = new Magician('Jon');

  expect(result).toEqual(values);
});

test('Swordsman', () => {
  const values = {
    name: 'Sergey',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };

  const result = new Swordsman('Sergey');

  expect(result).toEqual(values);
});

test('Undead', () => {
  const values = {
    name: 'Pavel',
    type: 'Undead',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };

  const result = new Undead('Pavel');

  expect(result).toEqual(values);
});

test('Zombie', () => {
  const values = {
    name: 'Albert',
    type: 'Zombie',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };

  const result = new Zombie('Albert');

  expect(result).toEqual(values);
});

test('Character name number', () => {
  const name = 1000;

  function characterFunc() {
      return new Character(name);
}

  expect(characterFunc).toThrow('Имя должно быть строкой');
});

test('Character name 1 letters', () => {
  const name = 'P';

  function characterFunc() {
      return new Character(name);
}

  expect(characterFunc).toThrow('Имя должно состоять от 2 до 10 символов');
});

test('Character name 11 letters', () => {
  const name = 'Dopelganger';

  function characterFunc() {
      return new Character(name);
}

  expect(characterFunc).toThrow('Имя должно состоять от 2 до 10 символов');
});

test('Character name 11 letters', () => {
  const values = {
      name: 'ALex',
      health: 100,
      level: 1,
  };

  const result = new Character('ALex');

  expect(result).toEqual(values);
});

/* тесты для задачи №2 */
test('Character broken metod levelUp Error', () => {
  const Olga = new Character('Olga');
  Olga.health = 0;

  function clevelUpFunc() {
      return Olga.levelUp();
  }

  expect(clevelUpFunc).toThrow('Нельзя повысить левел умершего');
});

test('Character working metod levelUp', () => {
  const values = {
      name: 'ALex',
      health: 100,
      level: 2,
      attack: 48,
      defence: 12,
  };

  const result = new Character('ALex');
  result.attack = 40;
  result.defence = 10;
  result.levelUp();

  expect(result).toEqual(values);
});

test('Character working metod damage', () => {
  const values = {
      name: 'ALex',
      health: 55,
      level: 1,
      defence: 10,
  };

  const result = new Character('ALex');
  result.defence = 10;
  result.damage(50);

  expect(result).toEqual(values);
});

test('Character broken metod damage', () => {
  const values = {
      name: 'ALex',
      health: -5,
      level: 1,
      defence: 10,
};

  const result = new Character('ALex');
  result.defence = 10;
  result.health = -5;
  result.damage(50);

  expect(result).toEqual(values);
});