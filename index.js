function scuberGreetingForFeet(feet){
  let result
  if(feet <= 400) {
    result = 'This one is on me!'
  }
  else if(feet >= 400, feet < 2000) {
    result = 'That will be twenty bucks.'
  }
  else if(feet > 2000, feet < 2500) {
    result = 'I will gladly take your thirty bucks.'
  } 
  else if(feet > 2500) {
    result = 'No can do.'
  }
return result
}

// OR more clean code
// function scuberGreetingForFeet(someValue){
//   if(someValue <= 400) {
//     return 'This one is on me!'
//   }
//   else if(someValue > 400 && someValue <= 2000) {
//     return 'That will be twenty bucks.'
//   }
//   else if(someValue > 2000 && someValue <= 2500) {
//     return 'I will gladly take your thirty bucks.'
//   } 
//   else {
//     return 'No can do.'
//   }
// }

// function ternaryCheckCity(city){
//   if(city === 'NYC') {
//     return "Ok, sounds good."
//   } else {
//     return 'No go.'
//   }
// }

function ternaryCheckCity(isCity) {
  return (isCity === 'NYC' ? 'Ok, sounds good.' : "No go.");
}

console.log(ternaryCheckCity('Hawai'));

// const city = 'Hawai'
// let isCity;
// city === 'NYC' ? (isCity = 'Ok, sounds good.') : (isCity = 'No go.');
// isCity;

const tipAmount = 'generous';

function switchOnCharmFromTip(tipAmount) {
    switch (tipAmount) {
      case 'generous':
        tipAmount = 'generous';
        return 'Thank you so much.';
        break;
      case 'not as generous':
        tipAmount = 'not as generous';
        return 'Thank you.';
        break;
      default:
        return 'Bye.';
        break;
    }
  }
  console.log(switchOnCharmFromTip('generous'));


// function switchOnCharmFromTip(tipAmount){
//   if(tipAmount === 'generous') {
//     return 'Thank you so much.'
//   } else if(tipAmount === 'not as generous'){
//     return "Thank you."
//   } else {
//     return "Bye."
//   }
// }


