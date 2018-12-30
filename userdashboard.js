class Student{
    constructor(){
    this.id;
    this.name;
    this.email;
    this.class;
    this.year;
    this.city;
    this.country;
    }
};


function saveData(){
    var formElements=document.forms['studentform'].elements;
    var std=new Student();
    std.id=formElements['studentId'].value;
    std.name=formElements['studentname'].value;
    std.email=formElements['email'].value;
    std.class=formElements['class'].value;
    std.year=formElements['enrolyear'].value;
    std.city=formElements['city'].value;
    std.country=formElements['country'].value;
    
    console.log(std);
    addToTable(std);
    
    document.forms['studentform'].reset();

}

function addToTable(std){
    var table=document.getElementById("displaytable");
    var tr=document.createElement("tr");
    for(let property in std){
        var td=document.createElement("td");
        td.innerHTML=std[property];
        tr.appendChild(td);
    }

     tr.appendChild(createEditTd(std));
     tr.appendChild(createDeleteTd());
     table.appendChild(tr);


}




function edit(std,tr){
    var formElements=document.forms['studentform'].elements;
    formElements['studentId'].value=std.id;
    formElements['studentname'].value=std.name;
    formElements['email'].value=std.email;

    document.getElementById("update").addEventListener("click",function(){
        update(formElements,std,tr);
        document.getElementById("save").style.display="block";
        document.getElementById("update").style.display="none";
    })

}

function update(formElements,std,tr){
    console.log(formElements['studentId'].value);
    std.id=formElements['studentId'].value;
    std.name=formElements['studentname'].value;
    std.email=formElements['email'].value;
    std.class=formElements['class'].value;
    std.year=formElements['enrolyear'].value;
    std.city=formElements['city'].value;
    std.country=formElements['country'].value;


    var ntr=document.createElement("tr");
    for(let property in std){
        var td=document.createElement("td");
        td.innerHTML=std[property];
        ntr.appendChild(td);
    }
    ntr.appendChild(createEditTd(std));
    ntr.appendChild(createDeleteTd());
    tr.parentElement.replaceChild(ntr,tr);
    document.forms['studentform'].reset();

}


function createEditTd(std){

    var editTd=document.createElement("td");
    var editButton=document.createElement("button");
    editButton.innerHTML="Edit";
    editTd.appendChild(editButton);
    editButton.addEventListener("click",function(){
        edit(std,this.parentElement.parentElement);
        document.getElementById("save").style.display="none";
        document.getElementById("update").style.display="block";
    });
 
  return editTd;
}


function createDeleteTd(){
    
    var deleteTd=document.createElement("td");
    var deleteButton=document.createElement("button");
    deleteButton.innerHTML="Delete";
    deleteTd.appendChild(deleteButton);
    deleteButton.addEventListener("click",function(){
        this.parentElement.parentElement.remove();
    });
 
    return  deleteTd;

}
