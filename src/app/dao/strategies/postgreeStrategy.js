const IDb = require('./base/interfaceDb');
const Sequelize = require('sequelize');
class PostgreSQLConnection {
  static connect() {}
}
class PostgreSQLStrategy extends IDb {
  constructor() {
    super();
    this._usuarios = null;
    this._sequelize = null;
    this._connect();
  }

  defineModel() {
    this._usuarios = this._sequelize.define(
      'usuario',
      {
        id_usuario: {
          type: Sequelize.INTEGER,
          required: true,
          primaryKey: true,
          autoIncrement: true,
        },
        email: {
          type: Sequelize.STRING,
          required: true,
        },
        senha: {
          type: Sequelize.STRING,
          required: true,
        },
      },
      {
        //opcoes para base existente
        tableName: 'usuario',
        freezeTableName: false,
        timestamps: false
      },
    );
  }

  _connect() {
    this._sequelize = new Sequelize(
      'cuidadoso', //database
      'cuidadoso', // user
      '123456', //senha
      {
        host: 'localhost',
        dialect: 'postgres',
        // case sensitive
        quoteIdentifiers: false,
        // deprecation warning
        operatorsAliases: false
    
        // dialectOptions: {
        //   ssl: true,
        },
    );

    this.defineModel();
  }



  async isConnected() {
    try {
      // await this._connect();
      await this._sequelize.authenticate();
      console.log('Entrei no DB cuidadoso')
      return true;
    } catch (error) {
      console.error('fail!', error);
      return false;
    }
  }

// Teste para login
  login(item){
    return this._usuarios.findOne({ where: {email:item}, raw: true });
  }
  

  create(item) {
    return this._usuarios.create(item, { raw: true });
  }

  async read(item) {
    return this._usuarios.findAll({ where: {email:item}, raw: true });
  }

  update(id, item) {
    return this._usuarios.update(item, { where: { id } });
  }
  delete(id) {
    const query = id ? { id } : {};
    return this._usuarios.destroy({ where: query });
  }

}

module.exports = PostgreSQLStrategy;
