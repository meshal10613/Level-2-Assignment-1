# Level-2: Assignment-1 Problem Solving with TypeScript

#### 🎯 Interview Questions - Blog Task
1. What are some differences between interfaces and types in TypeScript?

###### Answer: TypeScript: Interface vs Type Alias

TypeScript-এ আমরা `interface` এবং `type` দুটোই ব্যবহার করি **object, function বা structure define করার জন্য।** কিন্তু এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে।  

- Interface এবং Type এর পার্থক্য

| বৈশিষ্ট্য (Feature) | Interface | Type Alias |
|--------------------|-----------|------------|
| **মূল উদ্দেশ্য** | Object বা class-এর structure define করা | Object, primitive, union, tuple ইত্যাদি define করা |
| **Extend/Inheritance** | একাধিক interface থেকে extend করা যায় | Intersection (`&`) ব্যবহার করে extend করা যায় |
| **Declaration Merging** | একই নামে declare করলে merge হয় | একই নামে declare করলে error হয় |
| **Flexibility** | শুধু object/class structure define করতে পারে | Object, union, tuple, primitive সব define করা যায় |
| **Best Use** | Object বা class structure define করার জন্য | Complex type composition, union, tuple ইত্যাদি জন্য |


2. What is the use of the keyof keyword in TypeScript? Provide an example.

###### Answer: keyof হলো TypeScript-এর একটা বিশেষ keyword, যার কাজ হলো—
একটা টাইপের ভেতরে যে প্রপার্টিগুলো আছে, সেগুলোর নামগুলোকে বের করে আনা।

ধরি, একটা object টাইপ আছে যেখানে কিছু প্রপার্টি আছে—keyof সেই প্রপার্টিগুলোর নামগুলোকেই একটা union টাইপ বানিয়ে দেয়।

```ts
type User = {
  name: string;
  age: number;
  isActive: boolean;
};

type UserKeys = keyof User;
// UserKeys হবে: "name" | "age" | "isActive"
```


3. Explain the difference between any, unknown, and never types in TypeScript.

###### Answer: Difference Between `any`, `unknown`, and `never` in TypeScript

| টাইপ | ব্যাখ্যা (Bangla) | মূল পয়েন্ট |
|------|--------------------|-------------|
| **any** | TypeScript-কে বলে দেয় **কোনো চেক দরকার নেই**। যেকোনো কিছু করা যাবে। | - টাইপ সেফটি নেই<br>- ভুল করলেও এরর দেখায় না<br>- সবকিছুকে অনুমতি দেয় |
| **unknown** | যেকোনো কিছু হতে পারে, কিন্তু **ব্যবহার করার আগে টাইপ চেক করতে হয়**। | - any এর চেয়ে নিরাপদ<br>- সরাসরি ব্যবহার করা যায় না<br>- আগে টাইপ প্রমাণ করতে হয় |
| **never** | বোঝায় **এখানে কখনো কিছুই ঘটবে না** বা ফাংশন কিছু return করবে না। | - unreachable code বোঝাতে ব্যবহৃত<br>- infinite loop / error throw ক্ষেত্রে আসে |




4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

###### Answer: 


5. Provide an example of using union and intersection types in TypeScript.

###### Answer: