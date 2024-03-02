import { getUser } from "../utils/auth.js";

async function restrictToLoggedInUserOnly(req, res, next) {
  const uid = req.cookies.uid;

  if (!uid) return res.redirect(`/login`);

  const currentUser = getUser(uid);

  if (!currentUser) return res.redirect(`/login`);

  req.user = currentUser;
  next();
}

async function checkAuth(req, res, next) {
  const uid = req.cookies.uid;
  const currentUser = getUser(uid);
  req.user = currentUser;
  next();
}

export { restrictToLoggedInUserOnly, checkAuth };
