"use strict"

function newAnketa() {

    let name, patronymic, surname, age, gender, male, female, retired, retired_confirm;

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
        age = prompt("Введите Ваш возвраст", ""); 
    } while (!isFinite(age) || age === null || age === "");

    gender = confirm("Ваш пол - мужской?") ? male: female;

    if(gender){
        male = "мужской";
    } else {
        female = "женский";
    }

    retired = (age <= 63)? 63: 58;

    // gender ? retired = 63: retired = 58;

    if(retired == 63 && age >= retired || retired == 58 && age >= retired) {
        retired_confirm = "да";
    } else {
        retired_confirm = "нет"
    }
      
   
    

        
    alert(`ваше ФИО: ${surname} ${name} ${patronymic}
ваш возраст в годах: ${+age}
ваш возраст в днях: ${+age * 365}
через 5 лет вам будет: ${+age + 5}
ваш пол: ${gender}
вы на пенсии: ${retired_confirm}`);

}

newAnketa();
