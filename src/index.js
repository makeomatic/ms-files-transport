/* eslint-disable class-methods-use-this */
const Errors = require('common-errors');

module.exports = class AbstractFilesTransport {

  /**
   * Getter for a bucket
   * @return {Bucket}
   */
  get bucket() {
    const bucket = this._bucket;
    if (!bucket) {
      throw new Error('bucket was not initialized');
    }

    return bucket;
  }

  /**
   * Initializes resumable upload
   * @param  {Object} opts
   * @param  {String} opts.filename
   * @param  {Object} opts.metadata
   * @param  {String} opts.metadata.contentLength
   * @param  {String} opts.metadata.contentType - must be included
   * @param  {String} opts.metadata.md5Hash - must be included
   * @param  {String} [opts.metadata.contentEncoding] - optional, can be set to gzip
   * @return {Promise}
   */
  initResumableUpload(opts) {
    throw new Errors.NotImplemented('initResumableUpload');
  }

  /**
   * Initiates post processing of files when resumable upload has been finished
   * @param  {String} id
   * @return {Promise}
   */
  completeResumableUpload(id) {
    throw new Errors.NotImplemented('completeResumableUpload');
  }

  /**
   * Params are specific per provider, returns complete URL
   * that can be used to download specified file
   * @param  {Object} metadata
   * @return {Promise}
   */
  createSignedURL(metadata) {
    throw new Errors.NotImplemented('createSignedURL');
  }

  /**
   * Will be implemented here, for now just a noop
   * @param  {Object} metadata
   * @return {Promise}
   */
  postProcess(metadata) {
    throw new Errors.NotImplemented('postProcess method');
  }

  /**
   * Returns readStream for an existing file, useful for postProcessing
   * @param  {String} filename
   * @param  {Object} opts
   * @param  {Function} opts.onError
   * @param  {Function} opts.onResponse
   * @param  {Function} opts.onData
   * @param  {Function} opts.onEnd
   * @return {ReadStream}
   */
  readFile(filename, opts) {
    throw new Errors.NotImplemented('readFile method');
  }

};
