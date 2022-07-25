// const caesar = function(str, num) {

//     //Create a new array
//     let uniCodeArr = [];
  
//     //Use loop to convert letters to unicodes
//     for (let i = 0; i <= str.length-1; i++) {
      
//       //Convert a letter to unicode
//       let uniCode = str.charCodeAt(i);
  
//       //If the unicode falls under the range for A-Z (upper case), add num to shift. 
//       if (uniCode >= 65 && uniCode <= 90) {
        
//         let uniCodeShifted = uniCode + num;
  
//         //If the shifted unicode goes over 90, loop it back to A
//         while (uniCodeShifted > 90) {
//             uniCodeShifted -= 26;
//           }
  
//         //If the shifted unicode goes under 65, loop it ahead to Z
//         while (uniCodeShifted < 65) {
//             uniCodeShifted += 26;
//           }
      
//         //Add the shifted unicode to the uniCodeArr.
//         uniCodeArr.push(uniCodeShifted);
       
//       }
  
//       //If the unicode falls under the range for a-z (lowercase), add num to shift.
//       else if ( uniCode >= 97 && uniCode <= 122) {
        
//         let uniCodeShifted = uniCode + num;
  
//         //If the shifted unicode goes over 122, loop it back to A
//         while (uniCodeShifted > 122) {
//             uniCodeShifted -= 26;
//           }
  
//         //If the shifted unicode goes under 97, loop it ahead to Z
//         while (uniCodeShifted < 97) {
//             uniCodeShifted += 26;
//           }
      
//         //Add the shifted unicode to the uniCodeArr.
//         uniCodeArr.push(uniCodeShifted);
//       } 
      
//       //If the unicode doesn't fall under the range for A-z nor a-z, leave the code as it is.
//       else {
//         uniCodeArr.push(uniCode);
//       }
//     };
  
//     //Convert each unicode to a letter and create a new string
//     let charArr = uniCodeArr.map(x => String.fromCharCode(x));
  
//     //Convert the entire array to a string
//     let text = charArr.join('');
  
//     return text;
  
//   }

const caesar = function(str, num) {

    //Use map method to convert letters to unicodes
    let uniCodeArr = str.map(x => convertLetterToUnicode(x)) 
    
    let convertLetterToUnicode = function(str){
      
      //Convert a letter to unicode
      let uniCode = str.charCodeAt(i);
  
      //If the unicode falls under the range for A-Z (upper case), add num to shift. 
      if (uniCode >= 65 && uniCode <= 90) {
        
        let uniCodeShifted = uniCode + num;
  
        //If the shifted unicode goes over 90, loop it back to A
        while (uniCodeShifted > 90) {
            uniCodeShifted -= 26;
          }
  
        //If the shifted unicode goes under 65, loop it ahead to Z
        while (uniCodeShifted < 65) {
            uniCodeShifted += 26;
          }
      
        //Add the shifted unicode to the uniCodeArr.
        uniCodeArr.push(uniCodeShifted);
       
      }
  
      //If the unicode falls under the range for a-z (lowercase), add num to shift.
      else if ( uniCode >= 97 && uniCode <= 122) {
        
        let uniCodeShifted = uniCode + num;
  
        //If the shifted unicode goes over 122, loop it back to A
        while (uniCodeShifted > 122) {
            uniCodeShifted -= 26;
          }
  
        //If the shifted unicode goes under 97, loop it ahead to Z
        while (uniCodeShifted < 97) {
            uniCodeShifted += 26;
          }
      
        //Add the shifted unicode to the uniCodeArr.
        uniCodeArr.push(uniCodeShifted);
      } 
      
      //If the unicode doesn't fall under the range for A-z nor a-z, leave the code as it is.
      else {
        uniCodeArr.push(uniCode);
      }
    };
  
    //Convert each unicode to a letter and create a new string
    let charArr = uniCodeArr.map(x => String.fromCharCode(x));
  
    //Convert the entire array to a string
    let text = charArr.join('');
  
    return text;


// Do not edit below this line
module.exports = caesar;
