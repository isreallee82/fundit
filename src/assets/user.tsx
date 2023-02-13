import { Users } from '../../type'

type propsType = {
  users: Users[]
}

const data: propsType = {
  users: [
    {
      id: 1,
      UserName: function () {
        return this.fullName + this.id
      },
      image: 'https//:image.co',
      email: 'user1@gmail.com',
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
      id: 2,
      UserName: function () {
        return this.fullName + this.id
      },
      image: 'https//:image.co',
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
      UserName: function () {
        return this.fullName + this.id
      },
      image: 'https//:image.co',
      email: 'admin3@gmail.com',
      password: '123456',
      role: 'admin',
      fullName: 'Anthony Josua',
      location: 'nigeria',
      age: 29,
      address: 'federal captal teritory',
      height: 173,
      company: 'data sccientist',
    },
    {
      id: 4,
      UserName: function () {
        return this.fullName + this.id
      },
      image: 'https//:image.co',
      email: 'admin4@gmail.com',
      password: '123456',
      role: 'admin',
      fullName: 'Lana Rose',
      location: 'nigeria',
      age: 29,
      address: 'federal captal teritory',
      height: 173,
      company: 'data sccientist',
    },
  ],
}

export default data
