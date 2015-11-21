const Errors = require('common-errors');

module.exports = class AbstractFilesTransport {

  initResumableUpload(metadata) {
    throw new Errors.NotImplemented('initResumableUpload');
  }

  completeResumableUpload(id, metadata) {
    throw new Errors.NotImplemented('completeResumableUpload');
  }

  createSignedURL(metadata) {
    throw new Errors.NotImplemented('createSignedURL');
  }

  postProcess(metadata) {
    throw new Errors.NotImplemented('postProcess method');
  }

}
