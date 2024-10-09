const checkEmailValidity = (email: string) =>
  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)

export default checkEmailValidity
