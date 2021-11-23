import User from "./User";

class Room {
    
    constructor(id, name, id_users, id_messages) {
      this.id = id;
      this.name = name;
      this.id_users = id_users;
      this.id_messages = id_messages;
    }
  }
  
  module.exports = () => {
    return Room
  }