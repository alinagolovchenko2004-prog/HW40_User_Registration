let nextId = 1;
function createUser({ name, age, ...rest }) {
    if (!name || name.trim() === "") {
        throw new Error("Name is required");
    }

    if (age === "") {
        throw new Error("Age is required");
    }

    const numericAge = Number(age);

    if (
        Number.isNaN(numericAge) ||
        numericAge < 0 ||
        numericAge > 120 ||
        !Number.isInteger(numericAge)
    ) {
        throw new Error("Invalid age");
    }
    return {
        id: nextId++,
        name: name.trim(),
        age: numericAge,
        ...rest
    };
}