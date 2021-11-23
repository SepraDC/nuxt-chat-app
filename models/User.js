class User {
    constructor(id, pwd, id_rooms, id_messages) {
        this.id = id;
        this.pwd = pwd;
        this.id_rooms = id_rooms;
        this.id_messages = id_messages;
    }
  }
  
  module.exports = () => {
    return User
  }