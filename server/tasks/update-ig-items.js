import store from '../store';
import * as igApi from '../apis/instagram';

export function updateIgItems(cb=()=>{}) {
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

export function startUpdatingIgItems() {
  setInterval(() => {
    console.log('updateIgItems');
    updateIgItems();
  }, 1800000); // 30 mins
}
