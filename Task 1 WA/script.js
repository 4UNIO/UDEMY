//Task 1//
let admin,
name = "John";
admin = name;
alert(admin);
//Task 2//
name = "Ilya";
console.log(name);
// alert('hello ${1}'); Выведет hello ${1}
// alert('hello ${"name"}'); Выведет hello ${"name"}
// alert('hello ${name}');  Выведет hello Ilya

//Task 3//
let num = +prompt("Choose number");
if(num > 0)
{
    alert("1");
}else if(num < 0)
{
    alert("- 1");
}else{
    alert("- 0");
}

//Task 4//
let age = prompt("How old are you?");
if(age >= 14 && age <= 90)
{
    console.log("You can be  older than my sister or you can be the same age as i or you're almost the same age as my grandpa");
}else
{
    console.log("Drink some milk=)");
}

//Task 5//
for(let i = 2;i <= 10;i++)
{
    if(i % 2 == 0)
    {
        alert(i);
    }
}

//Task 6//
function min(a,b)
{
    if(a < b)
    {
        return a;
    }else{
        return b;
    }
}

console.log(min(5,10));
console.log(min(5,210));
console.log(min(15,10));

//Task 7//
function pow(x,n)
{
    return x**n;
}
console.log(pow(2,4));
console.log(pow(2,3));
console.log(pow(2,2));
















