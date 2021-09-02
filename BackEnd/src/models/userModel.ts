import DbService from '../services/DbService';

export interface IUser {
  name: string;
  email: string;
  password: string;
}

class UserModel {
  async create(user: IUser) {
    console.log("Create user DB", user);
    let client = await DbService.connect();
    const query = `INSERT INTO users (name, email, password) VALUES ('${user.name}', '${user.email}', '${user.password}')`;

    client.query(query, (err, res) => {
      if (err) {
          console.error(err);
          return;
      }
      console.log('Data insert successful');
    });
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