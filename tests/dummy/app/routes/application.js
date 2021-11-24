import Route from '@ember/routing/route';

export default class extends Route {
  async model() {
    let response = await fetch('/people');
    if (response.status === 200) {
      let json = await response.json();
      return {
        status: response.status,
        people: json.people,
      };
    } else {
      return {
        status: response.status,
        people: [],
      };
    }
  }
}
