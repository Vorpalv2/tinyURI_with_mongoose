const sessionIDToUserMap = new Map();

function setUser(id, user) {
  return sessionIDToUserMap.set(id, user);
}

function getUser(id) {
  return sessionIDToUserMap.get(id);
}

export { setUser, getUser };
