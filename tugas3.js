
let calculateCatAge = (event) => {
    event.preventDefault();

    let myAge= document.getElementById('years').value;
    let catAge;
    if (myAge == 1){
        catAge = 15;
    }
    else if (myAge == 2){
        catAge = 15 + 9;
    }
    else if (myAge > 2){
        catAge = (myAge - 2) * 4 + 24 ;
    }
    else {
        catAge = 0;
    }

document.getElementById('outputCat').innerHTML= catAge + ' years old in human years.';
}