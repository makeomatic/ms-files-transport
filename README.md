# ms-files-transport

abstract class with tests for ms-files service

## Methods

### Init(provider)

provider extends AbstractFileTransferer and creates bucket if it does not exist

### initResumableUpload(metadata)

Initiates resumable upload - could either be a multipart upload for amazon, or a real resumable upload with gce, etc.
Idea is to return upload id and instructions for what we are to do next

### completeResumableUpload(id)

Notifies server if resumable upload had finished. Unless this call is made within X amount of time
we must cleanup everything that was created during this upload

### createSignedURL(metadata)

Creates signed url, which provides access to a certain file for a limited amount of time

### postProcess(file, functionToPerform)

Buffers `file` and passes to `functionToPerform`, which is defined my implementation of a parent service
