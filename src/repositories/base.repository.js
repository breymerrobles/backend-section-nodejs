class BaseRepository {
    constructor(model) {
        this.model = model;
    }
    async get(id) {
        return await this.model.findById(id);
    }
    async getAll() {
        return await this.model.find();
    }

    async create(entity) {
        return await this.model.cerate(entity);
    }
    async update(id, entity) {
        return await this.model.findByIdAndUpdate(id, entity, { new: true });
    }
    async delete(id) {
        await this.model.findByIdAndDelete(id);
        return true;
    }
}
module.exports = BaseRepository;