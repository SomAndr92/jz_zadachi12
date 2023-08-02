let z1=prompt("Задача №1. Введите число.");
if (Number(z1)) {
    
    console.log("Первая цифра этого числа",z1[0])
}
else {
    alert("ЭТО НЕ ЧИСЛО")
}

let z2=prompt("Задача №2. Введите число.");
if (Number(z2)) {
   let z21=z2.length
    console.log("Последняя цифра этого числа",z2[z21-1])
}
else {
    alert("ЭТО НЕ ЧИСЛО")
}

let z3=prompt("Задача №3. Введите число.");
if (Number(z3)) {
   let z31=z3.length
   z32=Number(z3[0])+Number(z3[z31-1])
    console.log("Сумма первой и последней цифры этого числа",z32)
}
else {
    alert("ЭТО НЕ ЧИСЛО")
}

let z4 = prompt("Задача №4. Введите число.");
if (Number(z4)) {

    console.log("Количество цифр в этом числе", z4.length)
}
else {
    alert("ЭТО НЕ ЧИСЛО")
}

let z51 = prompt("Задача №5.Введите 1 число");
if (Number(z51)) {
    let z52 = prompt("Задача №5.Введите 2 число");
    if (Number(z52)) {

        if (z51[0] == z52[0]) {
            console.log("Первые цифры этих чисел одинаковые")
        }
        else {
            console.log("Первые цифры этих чисел разные")
        }
    }
    else {
        alert("ЭТО НЕ ЧИСЛО")
    }
}
else { alert("ЭТО НЕ ЧИСЛО") }
