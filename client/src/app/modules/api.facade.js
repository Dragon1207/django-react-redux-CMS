import { ajax } from 'rxjs/observable/dom/ajax';

const baseUrl = 'https://rafay.io/api';

export class ApiFacade {

  get = (url) => ajax.getJSON(`${baseUrl}/${url}/`)
    .map(res => res);

  post = (url, data) => ajax.post(`${baseUrl}/${url}/`, data)
    .map(res => res);

  patch = (url, data) => ajax.patch(`${baseUrl}/${url}/`, data)
    .map(res => res);

  put = (url, data) => ajax.put(`${baseUrl}/${url}/`, data)
    .map(res => res);
}