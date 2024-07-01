import ToDo from '../models/ToDo';

export default class ToDosAPI {
  static getToDos(): ToDo[] {
    return [
      {
        id: 1,
        title: 'Buy groceries',
        completed: false,
      },
      {
        id: 2,
        title: 'Walk the dog',
        completed: true,
      },
      {
        id: 3,
        title: 'Do laundry',
        completed: false,
      },
    ];
  }
}
