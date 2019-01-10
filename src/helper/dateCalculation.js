import moment from 'moment';

export const dateDiffernce = (date1, date2) => {
  const date1dif = moment(date1, 'DD MM YYYY');
  const date2dif = moment(date2, 'DD MM YYYY');
  return date2dif.diff(date1dif, 'days');
};

export const validateData = (date) => {
  if(date.length === 0) {
    return { errorDate : true, errorMessage: 'Date cannot be Empty' };
  }
  var input = date.split(' ');
  const returnValue = { errorDate : false, errorMessage : 'ValidDate' };
  if(input.length === 3)
  {
    if(input[0] >= 1 &&  input[0] <= 31 && input[0].length <= 2)
    {
      if(input[1] >= 1 && input[1] <= 12 && input[1].length <= 2)
      {
        if(input[2].length === 4 && input[2] >= 1)
        {
          if(input[2] % 400 === 0 || (input[2] % 4 === 0 && !(input[2]%100 ===0)))   // check for leap year
          {
            if(+input[1] === 2 && input[0] >= 30) {
              return { errorDate : true, errorMessage: 'you have entered leap year, day cant be more that 29' };
            }

            if(input[1] < 8 && (input[1] % 2) === 0 && input[0] <= 30) {
              return returnValue;
            }
            else if(input[1] < 8 && (input[1] % 2) !== 0 && input[0] <= 31) {
              return returnValue;
            }
            else if(input[1] > 7 && (input[1] % 2) !== 0 && input[0] <= 30) {
              return returnValue;
            }
            else if(input[1] > 7 && (input[1] % 2) === 0 && input[0] <= 31) {
              return returnValue;
            }
            else {
              return { errorDate : true, errorMessage: 'you have entered leap year, day cant be more that 29' };
            }
          }
          else {
            if(+input[1] === 2 && input[0] >= 29) {
              return  { errorDate : true, errorMessage: 'you have entered Non leap year, day cant be more that 28' };
            }

            if(input[1] < 8 && (input[1] % 2) === 0 && input[0] <= 30) {
              return returnValue;
            }
            else if(input[1] < 8 && (input[1] % 2) !== 0 && input[0] <= 31) {
              return returnValue;
            }
            else if(input[1] > 7 && (input[1] % 2) !== 0 && input[0] <= 30) {
              return returnValue;
            }
            else if(input[1] > 7 && (input[1] % 2) === 0 && input[0] <= 31) {
              return returnValue;
            }
            else {
              return { errorDate : true, errorMessage: 'You have entered invaild day, which is more than its expected days!!' };
            }
          }
        }
        else {
          return { errorDate : true, errorMessage: 'Invalid Year !! please enter date in DD MM YYYY' };
        }

      }
      else {
        return { errorDate : true, errorMessage:'Invalid Month !! please enter date in DD MM YYYY' };
      }
    }
    else {
      return { errorDate : true, errorMessage: 'Invalid Day !! please enter date in DD MM YYYY' };
    }
  }
  else {
    return { errorDate : true, errorMessage: 'Invalid data !! please enter date in DD MM YYYY' };
  }
};
