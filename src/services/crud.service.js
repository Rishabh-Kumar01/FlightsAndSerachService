class CrudService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    try {
      const result = await this.repository.create(data);
      return result;
    } catch (error) {
      console.log("Something went wrong: Crud Service: create");
      throw { error };
    }
  }

  async destory(itemId) {
    try {
      const result = await this.repository.destory(itemId);
      return result;
    } catch (error) {
      console.log("Something went wrong: Crud Service: destory");
      throw { error };
    }
  }

  async update(itemId, data) {
    try {
      const result = await this.repository.update(itemId, data);
      return result;
    } catch (error) {
      console.log("Something went wrong: Crud Service: update");
      throw { error };
    }
  }

  async get(itemId) {
    try {
      const result = await this.repository.get(itemId);
      return result;
    } catch (error) {
      console.log("Something went wrong: Crud Service: get");
      throw { error };
    }
  }

  async getAll() {
    try {
      const result = await this.repository.getAll();
      return result;
    } catch (error) {
      console.log("Something went wrong: Crud Service: get");
      throw { error };
    }
  }
}

module.exports = CrudService;
