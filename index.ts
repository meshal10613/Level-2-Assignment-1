//? Problem- 1
const formatValue = (
    value: number | string | boolean
): number | string | boolean  => {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value * 10;
    } else {
        return !value;
    }
};

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));

//? Problem- 2
const getLength = (input: string | unknown[]): number => {
    if (typeof input === "string") {
        return input.length;
    } else {
        return input.length;
    }
};

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));

//? Problem- 3
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());

//? Problem- 4
type Item = {
    title: string;
    rating: number;
}[];

const filterByRating = (input: Item): Item => {
    const filterInput = input.filter((f) => f.rating >= 4);
    return filterInput;
};

// const books = [
//     { title: "Book A", rating: 4.5 },
//     { title: "Book B", rating: 3.2 },
//     { title: "Book C", rating: 5.0 },
// ];

// console.log(filterByRating(books));

//? Problem- 5
type ActiveUser = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}[];

const filterActiveUsers = (input: ActiveUser) => {
    return input.filter((f) => f.isActive === true);
};

// const users = [
//     { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
//     { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
//     { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
// ];

// console.log(filterActiveUsers(users));

//? Problem- 6
interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (input: Book): string => {
	const output = `Title: ${input.title}, Author: ${input.author}, Published: ${input.publishedYear}, Available: ${input.isAvailable ? "Yes" : "No"}`;
	return output;
};

// const myBook: Book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     publishedYear: 1925,
//     isAvailable: true,
// };

// console.log(printBookDetails(myBook));