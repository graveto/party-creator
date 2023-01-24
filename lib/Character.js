class Character {
  constructor(name, id, charClass) {
    this.name = name;
    this.id = id;
    this.charClass = charClass;
    this.memberRole = "Leader";
  }

  getClass() {
   return this.charClass;
  }


}

module.exports = Character;
