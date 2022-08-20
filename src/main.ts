export class Player {
  constructor(
    private _name: string,
    private _hp: number,
    private _weapon: Weapon | null = null,
  ) {}

  get name(): string {
    return this._name;
  }

  get hp(): number {
    return this._hp;
  }

  set hp(hp: number) {
    if (this._hp < 0) this._hp = 0;
    this._hp = hp;
    return;
  }

  get weapon(): Weapon | null {
    return this._weapon;
  }

  doDmg(player: Player): void {
    if (!this.weapon) {
      console.log(`${this.name} não possui arma.`);
    } else {
      player.hp -= this.weapon.damage;
      console.log('====================');
      console.log(
        `${this.name} ATACANDO ${player.name} com ${this.weapon.damage} de dano`,
      );
      console.log(`Vida de ${this.name}: ${this.hp}`);
      console.log(`Vida de ${player.name}: ${player.hp}`);
      console.log('--------------------');
    }
  }
}

export abstract class Weapon {
  protected _dmg = 0;
  get damage() {
    return this._dmg;
  }
}

export class Sword extends Weapon {
  protected readonly _dmg = 20;
  get damage() {
    return this._dmg;
  }
}

export class Pyke extends Weapon {
  protected readonly _dmg = 30;
  get damage() {
    return this._dmg;
  }
}

export class Bow extends Weapon {
  protected readonly _dmg = 45;
  get damage() {
    return this._dmg;
  }
}

export class Battle {
  constructor(private p1: Player, private p2: Player) {}

  showPlayers(): Player[] {
    return [p1, p2];
  }

  start(): void {
    while (p1.hp > 0 && p2.hp > 0) {
      p1.doDmg(p2);
      p2.doDmg(p1);
    }
  }
}

const p1 = new Player('Kel', 150, new Sword());
const p2 = new Player('Sig', 40, new Pyke());

const battle = new Battle(p1, p2);
battle.start();
