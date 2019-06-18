function BankVault() {
  this.accounts = [],
  this.currentId = 0
}

BankVault.prototype.addAccount = function(account) {
  account.id = this.assignId();
  this.accounts.push(account);
}

BankVault.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

//make search based on user ID
BankVault.prototype.findUser = function(user) {
  for (var i=0; i< this.accounts.length; i++) {
    if (this.accounts[i]) {
      if (this.accounts[i].userId == user) {
        return this.accounts[i];
      }
    }
  };
  return false;
}


function Account(name, deposit) {
  this.userId = name,
  this.balance = deposit
}

var bankBook = new BankVault();

function newCheck(inputId, inputDep) {
  if (bankBook.findUser(inputId) === false) {
    var userAccount = new Account(inputId, inputDep);
    bankBook.addAccount(userAccount);
    printOut(inputId);
  } else {
  var accouq = bankBook.findUser(inputId);
  accouq.balance += inputDep;
  printOut(inputId);
}
}

function printOut(user) {
  var accou = bankBook.findUser(user);
  $(".user-name").html(accou.userId);
  $(".current-balance").html(accou.balance);
  alert(bankBook.accounts.length);
}



$(document).ready(function() {



  $("input#deposit").click(function(){
    var inputUserId = $("input#new-userId").val();
    var deposit = parseInt(prompt("How much would you like to deposit?"));
    var accouq = bankBook.findUser(inputUserId);
    accouq.balance += deposit;
    printOut(inputUserId);
  });

  $("input#withdraw").click(function(){
    var inputUserId = $("input#new-userId").val();
    var withdraw = parseInt(prompt("How much would you like to withdraw?"));
    var accouq = bankBook.findUser(inputUserId);
    accouq.balance -= withdraw;
    printOut(inputUserId);
  });

  $("form#new-bank").submit(function(event) {

    var inputUserId = $("input#new-userId").val();
    var inputDeposit = parseInt($("input#new-deposit").val());
    newCheck(inputUserId, inputDeposit);



    event.preventDefault();


























  });
});
