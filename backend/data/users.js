import bcrypt from 'bcryptjs';

const users = [
    {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Mama Mtabibu',
    email: 'mtabibu@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Baba Mzabibu',
    email: 'mzabibu@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Kaka Mtabibu',
    email: 'katibu@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Dada Mzabibu',
    email: 'dabibu@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
