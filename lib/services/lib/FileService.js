const keystone = require('keystone')
const fs = require('fs')
const FileModel = keystone.list('FileModel').model

const { WebError } = requireRoot('lib/errors')

const DefPath = "/home/user/DB"

class FileService { 
  async createFileModel (data) {
    const test = await FileModel.create({
      status: 'NEW'
    })
    return test.toObject()
  }

  async listModels (data) {
    const models = await FileModel.find()
    return models.map(m => m.toObject())
  }

//   async getModel (id) {
//     const model = TestModel.findOne({ _id: id })
//     if (model == null) {
//       throw new WebError('Model not found', 404)
//     }
//     return model
//   }

//   async createTestModel2 (data) {
//     const testModel = await this.getModel(data.testModel)
//     const test2 = await TestModel2.create({
//       name: data.name,
//       testModel
//     })
//     return test2.toObject()
//   }
}

module.exports = FileService
