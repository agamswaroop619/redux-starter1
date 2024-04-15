// // import { Map } from "immutable";
// // let book = Map({ title: "Harry Potter" });

// // function publish(book) {
// //   return book.set("isPublished", true);
// // }

// // book = publish(book);

// // console.log(book.toJS());
// import { produce } from "immer";

// let book = { name: "Harry Potter" };

// function publish(book) {
//   return produce(book, (draftBook) => {
//     draftBook.isPublished = true;
//   });
// }

// let updated = publish(book);

// console.log(book);
// console.log(updated);
