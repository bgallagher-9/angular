import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0, name: 'Zero' },
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Bob' },
      { id: 13, name: 'Sandra' },
      { id: 14, name: 'Toots McGee' },
      { id: 15, name: 'Bugeyes' },
      { id: 16, name: 'Milo' },
      { id: 17, name: 'Dulce' },
      { id: 18, name: 'June' },
      { id: 19, name: 'Megan' },
      { id: 20, name: 'Brian' }
    ];
    return {heroes};
  }
}
