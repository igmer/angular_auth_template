export default class UserInterface {
  public id?: number;
  public name?: string;
  public username?: string;
  public email?: string;
  public password?: string;
  public groups?: Groups[];
}

export class Groups {
  public id?: number;
  public name?: string;
  public roles?: Roles[];
}

export class Roles {
  public id?: number;
  public name?: string;
}