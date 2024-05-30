let userinput =document.getElementById('birthdayz')
userinput.max = new Date().toISOString().split('T')[0];
document.getElementById('btn').onclick=function(){
  let date=new Date(userinput.value).getDate();
  let month=new Date(userinput.value).getMonth()+1;
  let year=new Date(userinput.value).getFullYear();
  let today = new Date();
  let todaydate=today.getDate();
  let todaymonth=today.getMonth()+1;
  let todayyear=today.getFullYear();
  let x;
  let y;
  let z;
  function dayz(year,month){
    return new Date(year,month,0).getDate();
  }
  if(todayyear>=year){
    z=todayyear-year;
  }
  else if(todayyear<=year){
    console.log('hello')
  }
  if(todaymonth>=month){
    y=todaymonth-month;
  }
  else if(todaymonth<month){
    z=z-1;
    todaymonth=todaymonth+12;
    y=todaymonth-month;
  }
  if(todaydate>=date){
    x=todaydate-date;}
  else if(todaydate<date){
    y=y-1;
    todaydate=todaydate+dayz(todayyear,todaymonth)
    x=todaydate-date;
    if(todaymonth<month){
      todaymonth=todaymonth+12;
      y=todaymonth-month;
      z=z-1;
    }
    
  }
  console.log('Age: ' + z + ' years, ' + y + ' months, and ' + x + ' days.');
  document.getElementById('result').textContent=('You are '+z+' year, '+y+' month and '+x+' day old')

}
