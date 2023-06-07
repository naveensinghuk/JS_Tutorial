// nasted object - a object inside the object.... is called nasted objet in java script........
let user={
    id: 101,
    email: "abd@gmail.com",
    persionalinfo:{
        name: "rohit",
        mobile:45656569,
        address:{
            country:"india",
            city:"delhi",
            street:"dfhjdsgfjsdg",
        }
    }
};
console.log(user);
console.log(user.persionalinfo);
console.log(user.persionalinfo.address);
console.log(user.persionalinfo.address.country);
















