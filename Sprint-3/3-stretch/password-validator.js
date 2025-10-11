function passwordValidator(password) {
    let index = 0;
    let characters = "abcdefghijklmnopqrstuvwxyz";
    let checker = false;
    if (password.length < 5) {
        return false;
    }
    while (index <= password.length) {
        if (characters.toUpperCase().includes(password[index])) {
            checker = true;
        }
        index++;
    }
    if(checker == false)
        return false;

    checker = false;
    index = 0;
    while (index <= password.length) {
        if (characters.includes(password[index])) {
            checker = true;
        }
        index++;
    }
    if(checker == false)
        return false;

    checker = false;
    index = 0;
    while (index <= password.length) {
        if ("0123456789".includes(password[index])) {
            checker = true;
        }
        index++;
    }
    if(checker == false)
        return false;

    checker = false;
    index = 0;
    while (index <= password.length) {
        if ("!#$%.*&".includes(password[index])) {
            checker = true;
        }
        index++;
    }
    if(checker == false)
        return false;

    index = 0;
    while (index <= passwordsArray.length) {
        if (passwordsArray[index] === password) {
            return false;
        }
        index++;
    }

    return checker;
}

const passwordsArray = [];
passwordsArray.push("123HowAreYou?");
passwordsArray.push("ahmed@pass1");
passwordsArray.push("123JohnIsHere#");
passwordsArray.push("This_is_my_password?");
passwordsArray.push("!!I_Am_Sam_Movie!!1");

module.exports = passwordValidator; 

//console.log(passwordValidator("setrwcrat!ahmddAed@pass1"));