export default function EpochConverter(epochTime) {
  let d = new Date(0);
  d.setSeconds(epochTime)
  let minutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes(); 
  
  let result ={
    hourMinutes :`${d.getHours()}:${minutes}`,
    monthDayYear: `${d.getMonth()}/${d.getDay()}/${d.getFullYear()}`
    }
  return result;
}