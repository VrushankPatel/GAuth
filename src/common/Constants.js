const constants = {
    regex: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})"),
    errors: {
        INVALID_FIRSTNAME_LASTNAME: "FirstName and LastName can't be empty",
        INVALID_USERNAME: "Username should be atlest 8 to 20 characters long and must contain one uppercase, lowercase, digit and a special character",
        INVALID_PASSWORD: "Password should be atlest 8 to 20 characters long and must contain one uppercase, lowercase, digit and a special character",
        PASSWORD_MATCH: "Passwords doesn't match"
    },
    errorMessageTimeout: 3000,
    fireStore: "https://firebasestorage.googleapis.com/v0/b/gauth-x.appspot.com/o/image.jpg?alt=media"
}
export default constants