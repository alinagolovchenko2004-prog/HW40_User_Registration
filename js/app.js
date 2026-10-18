const userManager = createUserManager();

const ageInput = document.querySelector("#age");
const nameInput = document.querySelector("#name");
const registerButton = document.querySelector("#register");
const errorMessage = document.querySelector("#error");
const usersContainer = document.querySelector("#users");
registerButton.addEventListener("click" , function () {
    const age = ageInput.value;
    const name = nameInput.value;
    try {
        const user = createUser({ age, name });
        userManager.addUser(user);
        errorMessage.textContent = "";
        ageInput.value = "";
        nameInput.value = "";
        usersContainer.replaceChildren();
        userManager.getUsers().forEach(({ name, age }) => {
            const userElement = document.createElement("li");
            userElement.textContent = `${name} - ${age} years old`;
            usersContainer.append(userElement);

        });
        console.log("User registered:",user);
    }catch (error) {
        console.log(error.message);
        errorMessage.textContent = error.message;
    }finally {
        console.log("Registration attempt completed");
    }
})
