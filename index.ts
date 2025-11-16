//? Problem- 1
const formatValue = (
    value: number | string | boolean
): number | string | boolean | undefined => {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value * 10;
    } else if (typeof value === "boolean") {
        return !value;
    } else {
        return undefined;
    }
};

//? Problem- 2
const getLength = (input: string | any[]): number | undefined => {
    if (typeof input === "string") {
        return input.length;
    } else if (Array.isArray(input)) {
        return input.length;
    } else {
        return undefined;
    }
};

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

//? Problem- 4
type Filter = {
    title: string;
    rating: number;
}[];

const filterByRating = (input: Filter) => {
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
    const isActive = input.filter((f) => f.isActive === true);
    return isActive;
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

type Input = {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (input: Book): string => {
	const output = `Title: ${input.title}, Author: ${input.author}, Published: ${input.publishedYear}, Available: ${input.isAvailable}`;
	return output;
};

// const myBook: Book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     publishedYear: 1925,
//     isAvailable: true,
// };

// console.log(printBookDetails(myBook));