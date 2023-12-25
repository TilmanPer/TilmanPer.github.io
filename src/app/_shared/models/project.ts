export default class Project {
  id: number;
  name: string;
  image: string;
  description: string;
  link: string;
  tags: string[];
  updated: Date;
  constructor() {
    this.id = 0;
    this.name = '';
    this.image = '/assets/images/placeholder.png';
    this.description = '';
    this.link = '';
    this.tags = [];
    this.updated = new Date();
  }
}
