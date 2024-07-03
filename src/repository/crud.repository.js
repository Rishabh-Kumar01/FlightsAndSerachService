class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      console.log("Something went wrong: Crud Repository: create");
      throw { error };
    }
  }

  async destory(itemId) {
    try {
      const result = await this.model.destroy({ where: { id: itemId } });
      return result;
    } catch (error) {
      console.log("Something went wrong: Crud Repository: destory");
      throw { error };
    }
  }

  async update(itemId, data) {
    try {
      const result = await this.model.update(data, { where: { id: itemId } });
      return result;
    } catch (error) {
      console.log("Something went wrong: Crud Repository: update");
      throw { error };
    }
  }

  async get(itemId) {
    try {
      const result = await this.model.findByPk(itemId);
      return result;
    } catch (error) {
      console.log("Something went wrong: Crud Repository: get");
      throw { error };
    }
  }

  async getAll() {
    try {
      const result = await this.model.findAll();
      return result;
    } catch (error) {
      console.log("Something went wrong: Crud Repository: get");
      throw { error };
    }
  }
}

module.exports = CrudRepository;
