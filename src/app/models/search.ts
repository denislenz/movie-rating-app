export interface Title {
  title: string;
  image: string;
  id: string;
}

export interface Name {
  title: string;
  image: string;
  id: string;
}

export interface Company {
  title: string;
  image?: any;
  id: string;
}

export interface Search {
  titles: Title[];
  names: Name[];
  companies: Company[];
}
