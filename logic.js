//ex1//
function generateReports(students) {
    return students.map(student => {
      let total = 0; 
  
      student.scores.forEach(score => {
        total += score;
      });
  
      let average = total / student.scores.length;
  
      
      let grade; 
      if (average >= 90) {
        grade = 'A';
      } else if (average >= 80) {
        grade = 'B';
      } else if (average >= 70) {
        grade = 'C';
      } else if (average >= 60) {
        grade = 'D';
      } else {
        grade = 'F';
      }
  
      return {
        name: student.name,
        average: Math.round(average), 
        grade: grade
      };
    });
  }
  
  let students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] }
  ];
  
  const reports = generateReports(students);
  console.log(reports);



  //ex2//
class BankAccount {
    constructor(ownerName, initialBalance) {
        let account = {
            ownerName: ownerName,
            balance: initialBalance,
            history: []
        };
    
    

    this.deposit = function(amount){
        account.balance += amount ;
        account.history.push(`Deposited ${amount} $`);   //O(1)
    };

    this.withdraw = function(amount){
        if (amount <= account.balance){
            account.balance -= amount;
            account.history.push(`Withdrew ${amount} $`);        //O(1)
        }
        else {
            console.log("Not enough balance for withdrawal.");
        }
    };

    this.transferTo = function(anotherAccount, amount){  //O(1)
        if (amount <= account.balance) {
            this.withdraw(amount);
            anotherAccount.deposit(amount);
        }
        else {
            console.log("Not enough balance to transfer.");
        }

    };

    this.getSummary = function(){
        return `${account.ownerName}'s balance is ${account.balance}`    //O(1)
    };
    
    this.printHistory = function(){
        console.log(`Transaction history for ${account.ownerName}:`);  //O(n)
        account.history.forEach(transaction => {
            console.log(transaction);
        });

    }



    }
}

let acc1 = new BankAccount("John", 500);
let acc2 = new BankAccount("Sara", 300);

acc1.transferTo(acc2, 200); 
console.log(acc1.getSummary());
console.log(acc2.getSummary()); 
acc1.deposit(300);
acc1.printHistory();



//ex3//


let taskInput = document.querySelector('.task-input');
let addButton = document.querySelector('.add-btn');
let taskList = document.querySelector('.task-list');

addButton.addEventListener('click', function() {
   
    let taskText = taskInput.value.trim();

    if (taskText) {
        let newTask = document.createElement('li');
        newTask.textContent = taskText;

        newTask.addEventListener('click', function() {
            this.remove(); 
        });

        taskList.appendChild(newTask);

        taskInput.value = '';
    }
   
});
