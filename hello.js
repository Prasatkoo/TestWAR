function getPorgress(number) {
    if (number < 10){
        console.log("Heldáme váš účet " + number + "%" )
    }
    if (number < 50){
        console.log("už jen chvilku " + number + "%" )
    }
    if (number <= 80){
        console.log("Skoro hotovo " + number + "%" )
    }
    else  console.log("Hledáme " + number + "%" )
}

function compact(pole) {
    let arr = [];
    for (let i = 0; i < pole.length; i++) {
        if (!!pole[i]){
            arr.push(pole[i])
        }
    }
    console.log(arr)
}

let a = ["Hello",true,12,false];
compact(a)
getPorgress(50)

let golding = [2,3,8,9]
let petřík = 0
let vepřík = 0

function gold(field) {
let a = field.length
    for (let i = 0; i < a; i++) {
        if (i % 2 === 0){
         if (field[0] >= field[field.length - 1]){
            petřík += field[0]
            field.shift()
        }
         else if (field[0] < field[field.length -1]){
                petřík += field[field.length - 1]
                field.pop()
            }
        }
        else {
            if(field[0] >= field[field.length - 1]){
            vepřík += field[0]
            field.shift()

        }
        else if (field[0] < field[field.length - 1]){
            vepřík += field[field.length - 1]
            field.pop()
        }}



    }
    console.log(petřík)
    console.log(vepřík)


}
gold(golding)