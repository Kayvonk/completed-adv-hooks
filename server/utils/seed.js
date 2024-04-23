const connect = require("../config/connection");
const { User, Post } = require("../models");

connect.once("open", async () => {
  const postSeed = [
    { userName: "Kayvon", postDescription: "Za World" },
    { userName: "Joe", postDescription: "SQL for life" },
  ];
  await Post.deleteMany({});
  User.deleteMany({})
    .then(() => Post.create(postSeed))
    .then((data) =>
      User.create(
        postSeed.map((element, index) => {
          return { userName: element.userName, posts: [data[index]._id] };
        })
      )
    )
    .then((data) => {
      console.log(data);
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
});
