function checkEmail(input: string): boolean {
  if (!(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(input))) {
    return false
  }
  return true
}

export { checkEmail }