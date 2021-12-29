"use strict"

function newAnketa() {

    let name, patronymic, surname, age, ageIsNumber, askGender, gender, male, female, retired, retired_confirm;

    do{
        surname = prompt("Введите Вашу фамилию", ""); 
    } while (parseFloat(surname) || surname === null || surname === "");

    do{
        name = prompt("Введите Ваше имя", ""); 
    } while (parseFloat(name) || name === null || name === "");

    do{
        patronymic = prompt("Введите Вашу отчество", ""); 
    } while (parseFloat(patronymic) || patronymic === null || patronymic === "");

    do{
        age = prompt("Введите Ваш возвраст","" );
        ageIsNumber = parseInt(age) 
    } while (!age || isNaN(ageIsNumber));

    askGender = confirm("Ваш пол - мужской?");

     if(askGender){
        gender = "мужской";
    } else {
        gender = "женский";
    }


    if(askGender == true && age >= 63 || askGender == false && age >= 58) {
        retired_confirm = "да";
    } else {
        retired_confirm = "нет"
    }
      
     
    alert(`ваше ФИО: ${surname} ${name} ${patronymic}
ваш возраст в годах: ${ageIsNumber}
ваш возраст в днях: ${ageIsNumber * 365}
через 5 лет вам будет: ${ageIsNumber + 5}
ваш пол: ${gender}
вы на пенсии: ${retired_confirm}`);

}

newAnketa();
