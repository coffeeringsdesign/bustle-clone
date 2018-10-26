export class Article {
  constructor(public sponsored: boolean, public picture: string, public title: string, public description: string, public author: string, public body: string, public subject: string, public date: string) {};
}

// date is set as a number and it doesn't currently seem to be causing any issues
