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
        return await this.model.cerate(entity)
    }
    async update(id, entity) {
        return await findByIdAndUpdate(id, entity, { new: true });
    }
    async delete(id) {
        return await findByIdAndDelete(id);
    }
}
module.exports = BaseRepository;