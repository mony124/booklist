
var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];
var len=myObj.length;
for(var i=0;i<len;i++)
  {
    if(myObj[i].occupation==="Programmer")
      {
    alert(myObj[i].name);
  }
  }
for(var i=0;i<len;i++)
  {
   var agearr=[];
    agearr[i]=myObj[i].age;
   alert(agearr[i]);
  }
agearr.sort();
myObj.sort(function (a, b) {
 if (a.age < b.age) {
    return 1;
  }
});

for(var i=0;i<len;i++)
  {
    alert(myObj[i]);
  }