//form handling and working with forms 
// handle bacend processs of forms and making sure the data coming from anty frontend
// lib , framework , templating engines , we still handle it at the backend 
//session cookie 
// hm log khuch bhi data frontend par broswer par rakh skte hai and jab bhi aap kuchh bhi 
// request backend par karoge wo frontend saved data 
// automatically backend par chala jayega

app.use(express.json());  //json data ko readable karti hai 
app.use(express.urlencoded({extended: true})); // read a blob
  // isko use karke apan data frontend se serverr ko bhej te hai or backend
//   -use decode krta hai or read karta hai server pe 


