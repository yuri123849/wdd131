const DAYS=6;
const LIMIT=30;
let studentReport=[11,42,33,64,29,37,44];

for (let i = 0; i < studentReport.length; i++){
    if(studentReport < LIMIT);{
        console.log(studentReport[i]);
    }
}

while (studentReport.length > DAYS){
    studentReport.pop();
}