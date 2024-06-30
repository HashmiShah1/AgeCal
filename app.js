let userInput = document.querySelector('#date');
userInput.max = new Date().toISOString().split("T")[0]; // we only want to add past and todays date not future date
let result = document.querySelector("#result")

function calcAge(){
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1; // adding coz we are starting from zero means january so plus 1 to get february
    let y1 = birthDate.getFullYear();
    
    //for making a difference for current date to calculate age we use this currunt date
    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() +1;
    let y2 = today.getFullYear(); 

    // here comes the difference

    let d3,m3,y3;

    y3 = y2-y1;// currrent year - date of birth year
    
    if(m2 >= m1){// today mont is greater then the date of birth month
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;//todays month m2 + 12 and then minus date of birth month
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1, m1) - d1 + d2;
//day difference
    }

    // if month goes negative
    if(m3 < 0){
        m3 = 11;
        y3--;
    }
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`// add msg in template literal
}

function getDaysInMonth(year,month){
    return new Date(year, month, 0).getDate();//It will give the last day of the month and give us the no of days in that month
}