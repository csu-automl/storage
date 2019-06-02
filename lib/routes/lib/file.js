const express = require('express')
const router = express.Router()

const { wrap } = requireRoot('lib/utils')
const { fileService } = requireRoot('lib/services')

router.route('/files')
  .get(wrap(async (req, res, next) => {
    const models = await fileService.listModels()
    res.json(models)
  }))
  .post(wrap(async (req, res, next) => {
    const newModel = await fileService.createFileModel()
    res.json(newModel)
  }))

module.exports = router