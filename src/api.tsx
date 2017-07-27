import env from './env'

class Api {

  /**
   *
   */
  constructor() {
    console.log('dddd');
  }
  async _callServer(url: string, method: string) {
    const uri = env.apiUrl + url;
    console.log('uri is : ' + uri);
    const headers = {
      'Content-Type': 'application/json',
      credentials: 'same-origin',
    };
    return fetch(uri, {
      method,
      headers
    })
    .then((r) => r.text())
    .then((t) => {
      const v = t ? JSON.parse(t) : {};
      console.log('returned data' + JSON.stringify(v));
      return v;
    });
  }

  get(url: string) {
    return this._callServer(url, 'GET');
  }

  fetchEvents() {
    console.log('fetching....');
    return this.get('/events');
  }
}

export default new Api();