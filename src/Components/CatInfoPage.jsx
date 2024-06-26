import { faker } from "@faker-js/faker";

const createRandomUser
 = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

const USERS = faker.helpers.multiple(createRandomUser, {
  count: 5,
});


const createCats = () => {
    return {
        name: faker.string.name(),
        age: faker.number.age(),
        personality: faker.string.personality(),
        faveFood: faker.string.faveFood(),
        price: faker.string.price(),

    }
}

const cats = faker.helpers.mutliple(createCats, {
    count: 10,
});

console.log(cats)



const CatInfoPage = () => {
  return <h1>Cat Info Page</h1>;
};

export default CatInfoPage;
