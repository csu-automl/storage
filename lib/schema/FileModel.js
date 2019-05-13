var keystone = require('keystone')
var Types = keystone.Field.Types

/**
 * User Model
 * ==========
 */
const FileModel = new keystone.List('FileModel')

FileModel.add({
  path: { type: String, initial: true, required: true, index: true },
  status: {
    type: Types.Select,
    required: true,
    initial: true,
    options: ['NEW', 'UPLOADING', 'UPLOADED']
  }
})

/**
 * Registration
 */
FileModel.defaultColumns = 'path, status'
FileModel.register()
