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

//? Problem- 2
const getLength = (input: string | unknown[]): number => {
    if (typeof input === "string") {
        return input.length;
    } else {
        return input.length;
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

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

//? Problem- 4
type Item = {
    title: string;
    rating: number;
}[];

const filterByRating = (input: Item): Item => {
    const filterInput = input.filter((f) => f.rating >= 4 && f.rating <= 5);
    return filterInput;
};

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

//? Problem- 7
type UniqueArr = (string | number)[];

const getUniqueValues = (a: UniqueArr, b: UniqueArr): UniqueArr => {
    const result: UniqueArr = [];
    const newArr = [...a, ...b];
    for (let i = 0; i < newArr.length; i++) {
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            if (newArr[i] === result[j]) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            result.push(newArr[i]);
        }
    }

    return result;
};

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
