import { AppDataSource } from "./data-source";
import { Tweet } from "./entity/Tweet";
import { User } from "./entity/User";

export const Bootstrap = async () => {
  const userRepo = AppDataSource.getRepository(User);
  const user = userRepo.create({
    firstName: "Park",
    lastName: "MS",
    age: 26
  });
  await userRepo.save(user).catch((err) => {
    console.log("Error: ", err);
  });
  console.log("New User Saved", user);

  const tweetRepo = AppDataSource.getRepository(Tweet);
  const tweet = new Tweet();

  tweet.title = "I finally got a new Job";
  tweet.content = "Well after a long time I landed my dream job";
  tweet.user = Promise.resolve(user);

  await tweetRepo.save(tweet).catch((err) => {
    console.log("Error: ", err);
  });
};

export const find = async () => {
  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo
    .findOne({ where: { age: 26 } })
    .catch((err) => console.log(err));

  // userRepo.createQueryBuilder().andWhere()
  if (user) {
    console.log("===========User:", user, await user.tweets);
  }
};
