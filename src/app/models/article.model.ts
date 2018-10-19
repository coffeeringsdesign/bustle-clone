export class Article {
  constructor(public sponsored: boolean, public picture: string, public title: string, public description: string, public author: string, public subject: string, public date: number) {};
}
// pic url is currently set as sting --- need to hunt down how to handle the pics
// date is set as a number and it doesn't currently seem to be causing any issues
