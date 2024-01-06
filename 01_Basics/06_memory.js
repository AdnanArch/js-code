// Memory

// Stack Memory (Primitive Types) 
let userEmail = "adnan@gmail.com"
let anotherUserEmail = userEmail

anotherUserEmail = "rafique@gmail.com"

console.log(userEmail);
console.log(anotherUserEmail);

let userOne = {
    email: "adnan@google.com",
    id: 56
}

let userTwo = userOne

userTwo.email = "rafique@gmail.com"

console.log(userOne);
console.log(userTwo);


// Heap Memory (Non-Primitive Types)