export class Model {
  user;
  items;

  constructor() {
    this.user = 'Sena';
    this.items = [
      new TodoItem('Spor', false),
      new TodoItem('Kahvaltı', false),
      new TodoItem('Kitap Okumak', false),
      new TodoItem('Sinema', false),
    ];
  }
}

export class TodoItem {
  description;
  action;

  constructor(description: String, action: boolean) {
    this.description = description;
    this.action = action;
  }
}
