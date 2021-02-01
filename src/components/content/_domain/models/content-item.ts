export class ContentItem {
  public id: string;
  public name: string;
  public parent: string;
  public properties: ContentItemProperty[];
  public children: string[];

  public get path(): string {
    let val = `/${this.parent}${this.name}`;
    if (val.length > 1) {
      val = val + '/'
    }
    return val;
  }

  constructor(id?: string, name?: string, parent?: string, properties?: ContentItemProperty[], children?: string[]) {
    this.id = id || '';
    this.name = name || '';
    this.parent = parent || '';
    this.properties = properties || [];
    this.children = children || [];
  }
}

export class ContentItemProperty {
  public id: string;
  public type: string;
  public name: string;
  public value: string;

  constructor(id?: string, type?: string, name?: string, value?: string) {
    this.id = id || '';
    this.type = type || '';
    this.name = name || '';
    this.value = value || '';
  }
}