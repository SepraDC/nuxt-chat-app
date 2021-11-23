class Message {
  constructor(name, text, id, id_user, id_room) {
    this.name = name;
    this.text = text;
    this.id = id;
    this.time = new Date().toString().slice(15, 24);
    this.id_user = id_user;
    this.id_room = id_room;
  }
}

module.exports = () => {
  return Message
}