export interface IUser {
  name: string;
  email: string;
  password: string;
}

class UserModel {
  create(user: IUser) {
    console.log("Create user DB", user);
  }
  get(id: number) {
    console.log("Get User DB", id);
  }
  update(user: IUser) {
    console.log("Update User DB", user);
  }
  delete(id: number) {
    console.log("Delete User DB", id);
  }
}

export default UserModel;