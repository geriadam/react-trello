export default function authHeader() {
  const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5LCJleHAiOjE2ODE4MDU2NDJ9.iqaElaCpSll9dc1KrY5Jb6m54l-lR1A7ZrQ3dFfVJYs";

  if (accessToken) {
    return { Authorization: "Bearer " + accessToken };
  } else {
    return {};
  }
}