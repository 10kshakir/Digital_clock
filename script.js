setInterval(() => {
  const clock_id = document.getElementById("clock_div");
  let date = new Date();
  // convertTZ(date, "Asia/Jakarta") 
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let pm = false;
  if (hr > 12) {
    hr = hr - 12;
    pm=true;
  }
  if(hr==0) hr=12;
  if(hr==12)pm=true;
  if (hr < 10 ) hr="0"+hr;
  if (min < 10 ) min="0"+min;
  if (sec < 10 ) sec="0"+sec;
  let text=""
  if(pm){
      text=`${hr}:${min}:${sec} PM`;
  }else{
      text=`${hr}:${min}:${sec} AM`;
  }
  clock_id.innerHTML=text;
}, 1000);
