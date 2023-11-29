// export const secondsToHms = function (d = 0) {
//     d = Number(d);
//     var h = Math.floor(d / 3600);
//     var m = Math.floor(d % 3600 / 60);
//     var s = Math.floor(d % 3600 % 60);

//     // var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
//     // var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
//     // var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
//     // return hDisplay + mDisplay + sDisplay; 

//     var hDisplay = h > 0 ? h + (h == 1 ? " hr " : " hrs ") : "";
//     var mDisplay = m > 0 ? m + (m == 1 ? " min " : " mins ") : "";
//     if(h < 10){
//         hDisplay = 0 + hDisplay
//     }
//     return hDisplay + mDisplay; 
// }

export const formatAMPM = (date) => {
     
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  
//   console.log(formatAMPM(new Date));
  export default formatAMPM