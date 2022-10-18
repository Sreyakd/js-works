var countries=[
    
    {
        id:1,name:"India",population:100000,currency:"rs",language:"hindi"
    },
    {id:2,name:"china",population:32000000,currency:"yen",language:"chinese"},
    {id:3,name:"UsA",population:1000000,currency:"dollar",language:"english"},
    {id:4,name:"srilanka",population:7800000,currency:"srilankan rs",language:"simla"}


]
var htmldata=``
countries.forEach(cntry=>{
    htmldata+=`
    <tr>
    <td>${cntry.id}</td>
    <td>${cntry.name}</td>
    <td>${cntry.population}</td>
    <td>${cntry.currency}</td>
    <td>${cntry.language}</td>
    </tr>
    `
    
})

document.querySelector("#result").innerHTML=htmldata;
    
    
    
    
    

