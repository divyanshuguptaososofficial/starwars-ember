import Route from '@ember/routing/route';

export default class PeopleRoute extends Route {
  async model() {
    const people = await this.store.findAll('people');
    return { people };
  }
}
