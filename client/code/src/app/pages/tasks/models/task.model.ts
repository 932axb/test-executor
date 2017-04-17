export class Task {

  constructor(
      public id: number,
    public requester: string,
    // public env_id: number,
    public environment: string,
    // public interface_id: number,
    public interface_: string,    // cannot user interface word, because it is part of TypeScript
    // public template_id: number,
    public template: string,
      public path: string

  ) {  }

}
