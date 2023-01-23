let bill = document.getElementById('bill');
let tip = document.getElementById('tip');



// calculating bill peercentage

let tipPercentage = () =>{
    tip.addEventListener('input', ()=>{
       let tips = (parseInt(tip.value)/100);
    });
}

let billTotal = () =>{
    bill.addEventListener('input', ()=>{
      let bills = parseInt(bill.value)
    });
}

// INCREMENT AND DECREAMENT BUTTONS

// Increament
let add = document.querySelector('.add');
let people = document.querySelector('.people');

let numberOfPeople = 0;

let incrementBtn = () =>{
    add.onclick =() =>{
        people.textContent = numberOfPeople++;
    }
};


// decreament
let minus = document.querySelector('.minus');

let decrementBtn = () => {
    minus.addEventListener('click', ()=>{
         people.textContent = numberOfPeople--;
    });
    numberOfPeople = 0;
}

// total amount

function totalAmount(){
    totalAmount = tipPercentage() + billTotal();
};








// calculating person
let amountPerson = document.getElementById("person-amount");


const totalPerPerson = () =>{
    amountPerson.innerText = (totalAmount/people.innerText)
    console.log(amountPerson)
}
































 


    