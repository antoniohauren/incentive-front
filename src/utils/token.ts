export function getToken() {
  return window.localStorage.getItem("token");
}

export function setToken(token: string) {
  window.localStorage.setItem("token", token);
}

export function removeToken() {
  window.localStorage.removeItem("token");
}
