class User{
    #password
    constructor(name){
        this.name = name;
    }

    #validateUsername(username){
        //validating userName through if else
        //by default, we are simulating all usernames are correct

        return true;
    }

    #validatePassword(password){
        //validating password through if else
        //by default, we are simulating all passwords are correct
    
        return true;
    }

    singUp(username,password){
        let isValidated = false;

        //when user inputs valid username & password

        isValidated = this.#validateUsername(username) && this.#validatePassword(password);

        if(isValidated){
            this.username = username;
            this.#password = password;

            console.log('user signed up successfully');
        } else {
            console.log('signup failure');
        }
        //isValidated = true && true
    }

    login(username,password){
        if(username===this.username && password===this.#password){
            console.log('logged in successfully');
        } else {
            console.log('authentication failed');
        }
    }

    set passowrd(newPassword){
        this.#password = newPassword;
    }

    get naamBatao(){
        return this.name;
    }
}


let u1 = new User("Manu");
console.log(u1);

class Author extends User{
    constructor(name){
        super(name)
    }
}

let a1 = new Author("Priyanshu");
console.log(a1);