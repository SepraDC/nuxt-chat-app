class AESCipher{
    
  constructor() {
        this.key = 'my passphrase';
        this.aes256 = require('nodejs-aes256');        
      }    

    encrypted(password) {
      return (this.aes256.encrypt(this.key, password));
    }
    decrypted(password)
    {
      return (this.aes256.decrypted(this.key,password));
    }
    isValid(password)
    {
      //Récupération du password de la base
      return (decrypted(password) == password);
    }  
}

module.exports = () => {
  return new AESCipher();
};
