//task 1
let res = "";
for(let i = 1 ; i <= 10; i++){
    res += i;
}
console.log(res);

let i = 1;
let res= "";
while (i) {
    if(i==11){
        break;
    }
    res+=i;
    i++;
}
console.log(res);
let i = 1;
let res ='';
do{
    res+=i;
    i++;
}while(i <= 10);
console.log(res);

//task 2

const primeNumbers = (a, b) => {
    for (let i = a; i <= b; i++) {
        let flag = 1;
        for (let j = 2; (j <= i / 2) && (flag == 1); j = j + 1) {
            if (i % j == 0) {
                flag = 0
            }
        }
        if (flag == 1) { console.log(i); }
    }

}
primeNumbers(1, 100);

// Task 3
const LOGIN = "ADMIN";
const PASSWORD = "1q2w3e";
const authorize = () => {
    let userPassword;
    let userLogin;
    let isAuthSuccess = false;
    let flag = 3;
    do {
        if (flag !=0){
            userLogin = prompt("Логин:");
        if (!userLogin) {
            alert("Введите логин");
            continue;
        }
        userPassword = prompt("Пароль:");
        if (!userPassword) {
            alert("Введите пароль");
            continue;
        }

        if (userPassword === PASSWORD || userLogin === LOGIN) {
            isAuthSuccess = true;
            alert("Welcome");
        } else {
            alert("Данные неверны!");
            flag -=1;
            alert(`Количество попыток ${flag}`)
        }
        console.log(flag);
        }else {
            alert("Количество попыток исчерпанно");
            break;
        }
        
    } while (!isAuthSuccess);

    
};
authorize()
