import ToDo from '../models/ToDo';

type Order = 'asc' | 'desc';

export function byId(data: ToDo[], order: Order | undefined): ToDo[] {
  return data.sort((a, b) => {
    if (order === 'asc') {
      return a.id - b.id;
    }

    return b.id - a.id;
  });
}

export function byTitle(data: ToDo[], order: Order | undefined): ToDo[] {
  return data.sort((a, b) => {
    if (order === 'asc') {
      return a.title.localeCompare(b.title);
    }

    return b.title.localeCompare(a.title);
  });
}
