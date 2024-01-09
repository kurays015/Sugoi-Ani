export function removeEmailDomain(email) {
  return email.replace(/@.*/, "") || ""
}
