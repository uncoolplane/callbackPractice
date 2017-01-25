/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the sayHi function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/

function first(array, cb) {
  cb(array[0]);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

function last(array, cb) {
  cb(array[array.length-1]);
}

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

  function multiply(num1, num2, cb) {
    var answer = num1 * num2;
    cb(answer);
  }

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

function contains(names, value, cb) {
  var isFound = false;
  for(var i = 0; i < names.length; i++) {
    if (names[i] === value) {
      isFound = true;
    }
  }
  cb(isFound);
}

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

function onList(arr, value) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === value) {
      return true;
    }
  }
  return false;
}

function uniq(names, cb) {
  var newarr = [];
  for(var i = 0; i < names.length; i++) {
    if(!onList(newarr, names[i])) {
      newarr.push(names[i]);
    }
  }
  cb(newarr);
  return newarr;
}

// console.log(names);
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

function each(names, cb) {
  // names.forEach(cb);
  for(var i = 0; i < names.length; i++) {
    cb(names[i], i);
  }
}

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

 function getUserById(users, id, cb) {
   for(var i = 0; i < users.length; i++) {
     if(users[i].id === id) {
       return cb(users[i]);
     }
   }
   console.log("Not Found");
 }

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' +
    user.name + ' and the address of ' + user.address);
});

getUserById(users, 'xxx', function(user){
  console.log('The user with the id xxx has the email of ' + user.email + ' the name of ' +
    user.name + ' and the address of ' + user.address);
});
