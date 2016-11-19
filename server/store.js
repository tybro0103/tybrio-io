import s3 from './s3';
import env from '../env';

class Store {

  constructor(bucketName, fileName) {
    this._loaded = false;
    this._bucketName = bucketName;
    this._fileName = fileName;
    this._state = {};
  }

  load(cb) {
    console.log('loading store');

    const params = {
      Bucket: this._bucketName,
      Key: this._fileName,
    };

    s3.getObject(params, (error, data) => {
      // check for error; file not existing is ok
      if (error && error.code !== 'NoSuchKey') return cb(error);
      //
      if (data && data.Body) this._state = JSON.parse(data.Body);
      this._loaded = true;
      cb();
    });
  }

  save(cb) {
    console.log('saving store');

    // must load before saving; else you could overwrite
    if (!this._loaded) cb(new Error('store not yet loaded'));

    const params = {
      Bucket: this._bucketName,
      Key: this._fileName,
      Body: JSON.stringify(this._state),
      ContentType: 'application/json',
    };

    s3.putObject(params, error => cb(error));
  }

  get(key) {
    return key
      ? this._state[key]
      : this._state;
  }

  set(keyVals, cb) {
    this._state = {...this._state, ...keyVals};
    this.save(cb);
  }

}

const store = new Store(env.awsBucketName, 'store.json');

export default store;
