function addNewWEField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here')
    let weOb=document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode,weAddButtonOb);

}

function addNewAQField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here')
    let weOb=document.getElementById("aq");
    let weAddButtonOb = document.getElementById("aqAddButton");
    weOb.insertBefore(newNode,weAddButtonOb);

}
function generateCV(){
    // let file = document.getElementById('imageField').files[0];
    // let reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onloadend = function(){
    //     let cas = document.getElementById('imgT').getAttribute('src');
    //     screen.setAttribute(reader.result);
    // };
    let nameField = document.getElementById("nameField").value;
    document.getElementById("nameT1").innerHTML = nameField;
    document.getElementById("nameT2").innerHTML = nameField;

    document.getElementById("phoneT").innerHTML = document.getElementById("phoneField").value;

    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;

    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    let wes = document.getElementsByClassName("weField");
    let str='';
    for(let e of wes){
        str = str + `<li> ${e.value} </li>`;

    }
    document.getElementById('weT').innerHTML = str;

    let aqs = document.getElementsByClassName('eqField');
    let str1 = '';
    for(let s of aqs){
        str1 = str1 + `<li> ${s.value} </li>`
    }
    console.log(str1);
    document.getElementById('aqT').innerHTML = str1;
    // let str = "";
    // for(let e of wes){   
    //     let con = e.value;
    //     str = str + "<li>"+con+ "</li>";
    // }
    // document.getElementById('weT').innerHTML = str;

    // let aqs = document.getElementsByClassName("eqField");
    // let str1 = "";
    // for(let e of aqs){   
    //     let con = e.value;
    //     str1 = str1 + "<li>"+con+ "</li>";
    // }
    // document.getElementById('aqT').innerHTML = str1;
    // let file = document.getElementById('imageField').files[0];
    // let reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onloadend = function(){
    //     let cas = document.getElementById('imgT').getAttribute('src');
    //     screen.setAttribute(reader.result);
    // };
    document.getElementById('cv-form').style.display='none'
    document.getElementById('cv-template').style.display="block"
    
}

function printCV(){
    window.print();
}