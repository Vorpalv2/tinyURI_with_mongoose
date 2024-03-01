import { getUser } from "../utils/auth.js";

async function restrictToLoggedInUserOnly(req, res, next) {
  const uid = req.cookies.uid; // returns a random UID => 010b18bc-a2cc-4f63-a168-d7abed6d4e70

  if (!uid) return res.redirect(`/login`);

  const currentUser = getUser(uid);

  //   console.log("current UUID user:", currentUser); //logs undefined

  if (!currentUser) return res.redirect(`/login`);

  req.user = currentUser;
  next();
}

export { restrictToLoggedInUserOnly };
