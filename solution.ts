//? Problem- 1
const formatValue = (
    value: number | string | boolean
): number | string | boolean => {
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

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());

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
    const output = `Title: ${input.title}, Author: ${
        input.author
    }, Published: ${input.publishedYear}, Available: ${
        input.isAvailable ? "Yes" : "No"
    }`;
    return output;
};

// const myBook: Book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     publishedYear: 1925,
//     isAvailable: true,
// };

// console.log(printBookDetails(myBook));

//? Problem- 7
type UniqueArr = (string | number)[];

const getUniqueValues = (a: UniqueArr, b: UniqueArr): UniqueArr => {
    const result: UniqueArr = [];

    for (let i = 0; i < a.length; i++) {
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j] === a[i]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result.push(a[i]);
        }
    }

    // Add elements from second array
    for (let i = 0; i < b.length; i++) {
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j] === b[i]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result.push(b[i]);
        }
    }

    return result;
};

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));

//? Problem- 8
type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
    if (products.length === 0) return 0;

    return products.reduce((total, item) => {
        if (
            item.discount !== undefined &&
            (item.discount < 0 || item.discount > 100)
        ) {
            throw new Error("Discount must be between 0 and 100");
        }

        const basePrice = item.price * item.quantity;
        const finalPrice =
            item.discount !== undefined
                ? basePrice - (basePrice * item.discount) / 100
                : basePrice;

        return total + finalPrice;
    }, 0);
};

// const products = [
//     { name: "Pen", price: 10, quantity: 2 },
//     { name: "Notebook", price: 25, quantity: 3, discount: 10 },
//     { name: "Bag", price: 50, quantity: 1, discount: 20 },
// ];

// console.log(calculateTotalPrice(products));