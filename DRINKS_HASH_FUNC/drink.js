
     

function drinkInputInfo() {

    let alcohol;

    let drinkName = prompt("Какое название напитка?");

    let drinkAlcohol = confirm(drinkName + " - алкогольный напиток или нет?\nok - алкогольный\nотмена - без алкогольный");

    let drinkRecipe = prompt("Какой рецепт напитка?");

    drinkStorage(drinkName, drinkAlcohol);

}