import { Users } from '../../type'

type propsType = {
  users: Users[]
  Investors: Users[]
}

const data: propsType = {
  users: [
    {
      id: 1,
      UserName: function () {
        return this.fullName + this.id
      },
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      email: 'user1@gmail.com',
      password: '123456',
      role: 'user',
      fullName: 'collins Morgan',
      location: 'nigeria',
      age: 29,
      address: 'federal captal teritory',
      height: 173,
      company: 'UX/UI Designer',
    },
    {
      id: 2,
      UserName: function () {
        return this.fullName + this.id
      },
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      email: 'user2@gmail.com',
      password: '123456',
      role: 'user',
      fullName: 'collins Morgan',
      location: 'nigeria',
      age: 29,
      address: 'federal captal teritory',
      height: 173,
      company: 'Devops Engineer',
    },
    {
      id: 3,
      UserName: function () {
        return this.fullName + this.id
      },
      image:
        'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      email: 'admin3@gmail.com',
      password: '123456',
      role: 'admin',
      fullName: 'Anthony Josua',
      location: 'nigeria',
      age: 29,
      address: 'federal captal teritory',
      height: 173,
      company: 'Frontend Engineer',
    },
    {
      id: 4,
      UserName: function () {
        return this.fullName + this.id
      },
      image:
        'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=723&q=80',
      email: 'admin4@gmail.com',
      password: '123456',
      role: 'admin',
      fullName: 'Lana Rose',
      location: 'nigeria',
      age: 29,
      address: 'federal captal teritory',
      height: 173,
      company: 'Backend Engineer',
    },
    {
      id: 5,
      UserName: function () {
        return this.fullName + this.id
      },
      image:
        'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80',
      email: 'admin4@gmail.com',
      password: '123456',
      role: 'admin',
      fullName: 'Lana Rose',
      location: 'nigeria',
      age: 29,
      address: 'federal captal teritory',
      height: 173,
      company: 'Backend Engineer',
    },
    {
      id: 6,
      UserName: function () {
        return this.fullName + this.id
      },
      image:
        'https://images.unsplash.com/photo-1519895609939-d2a6491c1196?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      email: 'admin4@gmail.com',
      password: '123456',
      role: 'admin',
      fullName: 'Lana Rose',
      location: 'nigeria',
      age: 29,
      address: 'federal captal teritory',
      height: 173,
      company: 'Backend Engineer',
    },
  ],
  Investors: [
    {
      id: 1,
      UserName: 'Rachel McDermott',
      image:
        'https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80',
      email: 'user1@gmail.com',
      password: '123456',
      role: 'user',
      fullName: 'collins Morgan',
      location: 'nigeria',
      age: 29,
      address: 'federal captal teritory',
      height: 173,
      company: 'Data sccientist',
    },
    {
      id: 2,
      UserName: 'Ali Morshedlou',
      image:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      email: 'user2@gmail.com',
      password: '123456',
      role: 'user',
      fullName: 'collins Morgan',
      location: 'nigeria',
      age: 29,
      address: 'federal captal teritory',
      height: 173,
      company: 'data sccientist',
    },
    {
      id: 3,
      UserName: 'Marvrick Mavins',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      email: 'admin3@gmail.com',
      password: '123456',
      role: 'admin',
      fullName: 'Anthony Josua',
      location: 'nigeria',
      age: 29,
      address: 'federal captal teritory',
      height: 173,
      company: 'UX/UI Designer',
    },
    {
      id: 4,
      UserName: 'Mark Farías',
      image:
        'https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      email: 'admin4@gmail.com',
      password: '123456',
      role: 'admin',
      fullName: 'Lana Rose',
      location: 'nigeria',
      age: 29,
      address: 'federal captal teritory',
      height: 173,
      company: 'Devops Engineer',
    },
  ],
}

export default data
