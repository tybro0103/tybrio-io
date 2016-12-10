import store from '../store';
import * as igApi from '../apis/instagram';

export default function updateIgItems(cb) {
  igApi.fetchRecentMedia()
    .then(items => {
      const storedItems = store.get('igItems') || {};
      const igItems = {...storedItems, ...items};
      store.set({igItems}, error => {
        cb(error, items);
      });
    })
    .catch(error => {
      cb(error);
    });
}
