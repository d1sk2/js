// 1 задание

const user = {
    danya: {
        name: "Даня",
        age: 17,
        gender: "male",
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    },
};

console.log(user)

// 2 задание

user.danya.sayHello('Даня')

// 3 задание

const users = [
    {
        name: "Maks",
        age: 20,
        isAdmin: true
    },

    {
        name: "Ivan",
        age: 15,
        isAdmin: false
    },

    {
        name: "Nikita",
        age: 18,
        isAdmin: false
    }
];

let simpleUsers = 0;

for (let i = 0; i < users.length; i++) {

    if (!users[i].isAdmin) {
        simpleUsers++;
    }
}

console.log(simpleUsers);
