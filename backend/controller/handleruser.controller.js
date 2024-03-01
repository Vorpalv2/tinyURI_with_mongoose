import { user } from "../model/user.model.js";

async function handleSignup(req, res) {
  const { username, password, email } = req.body;

  let newUser = await user.create({
    username,
    password,
    email,
  });

  if (!newUser) return res.redirect(`/register`);
  res.redirect("/");
}

async function handleLogin(req, res) {
  let { email, password } = req.body;

  let foundUser = await user.findOne({ email: email, password: password });

  if (!foundUser) return res.redirect(`/login`);
  console.log(`Welcome User :  ${foundUser.username}`);
  res.redirect("/");
}

export { handleSignup, handleLogin };
