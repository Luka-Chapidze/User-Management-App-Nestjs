import { Injectable } from '@nestjs/common';
import { User } from './users.interface';

@Injectable()
export class UsersService {
  users: User[] = [
    {
      email: 'johndoe@gmail.com',
      name: 'John',
      lastname: 'Doe',
      idNumber: '01024082128',
      birthDate: '2001-08-27',
      id: 1,
    },
    {
      email: 'janedoe@gmail.com',
      name: 'Jane',
      lastname: 'Doe',
      idNumber: '01011060907',
      birthDate: '2000-04-02',
      id: 2,
    },

    {
      email: 'willsmith@gmail.com',
      name: 'William',
      lastname: 'Smith',
      idNumber: '01100203004',
      birthDate: '2000-02-13',
      id: 3,
    },
    {
      email: 'davidj@gmail.com',
      name: 'David',
      lastname: 'Jameson',
      idNumber: '01011081128',
      birthDate: '2006-08-27',
      id: 4,
    },
    {
      email: 'bobray@gmail.com',
      name: 'Bob',
      lastname: 'Ray',
      idNumber: '01011160907',
      birthDate: '2000-04-02',
      id: 5,
    },
    {
      email: 'mmckinney@gmail.com',
      name: 'Matilda',
      lastname: 'Mckinney',
      idNumber: '01100123004',
      birthDate: '2000-01-13',
      id: 6,
    },
    {
      email: 'bartadamson@gmail.com',
      name: 'Bart',
      lastname: 'Adamson',
      idNumber: '01111581128',
      birthDate: '1987-02-27',
      id: 7,
    },
    {
      email: 'jameslucas@gmail.com',
      name: 'James',
      lastname: 'Lucas',
      idNumber: '01011220907',
      birthDate: '1988-04-02',
      id: 8,
    },
    {
      email: 'willharold@gmail.com',
      name: 'Will',
      lastname: 'Harold',
      idNumber: '01100203001',
      birthDate: '2000-01-13',
      id: 9,
    },
    {
      email: 'ckramer@gmail.com',
      name: 'Charles',
      lastname: 'Kramer',
      idNumber: '01103323001',
      birthDate: '1980-01-13',
      id: 10,
    },
    {
      email: 'flake@gmail.com',
      name: 'Faraz Lake',
      lastname: 'Chapidze',
      idNumber: '01024081128',
      birthDate: '2003-01-27',
      id: 11,
    },
    {
      email: 'jbird@gmail.com',
      name: 'Jason',
      lastname: 'Bird',
      idNumber: '01012390907',
      birthDate: '1977-04-02',
      id: 12,
    },

    {
      email: 'erikpickett@gmail.com',
      name: 'Erik',
      lastname: 'Pickett',
      idNumber: '01100273004',
      birthDate: '1967-04-13',
      id: 13,
    },
  ];

  addUser(user: User) {
    user.id = this.users.length + 1;
    this.users.push(user);
  }

  getUsers() {
    return [...this.users];
  }

  getUser(id: number) {
    let user = this.users.find((user) => user.id === id);
    console.log(user);

    return { ...user };
  }

  editUser(user: User) {
    let userToChange: any = this.users.find((us) => us.id === user.id);
    user.id = userToChange.id;
    let index = this.users.indexOf(userToChange);
    this.users.splice(index, 1, user);
  }

  removeUser(id: number) {
    if (id) {
      let ind = this.users.indexOf(
        this.users.find((user: User) => user.id === id),
      );

      this.users.splice(ind, 1);
      return this.users;
    }
  }
}
