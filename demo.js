function validate(){
    var mobNo = document.getElementById("mobNo").value;
    var regx = /^[6-9]\d{9}$/;
    if(regx.test(mobNo)){
        document.getElementById("msgLabel").innerHTML = "Valid";
        document.getElementById("msgLabel").style.color = "green";
        document.getElementById("mobNo").style.border = "2px green solid";
    }
    else{
        document.getElementById("msgLabel").innerHTML = "Invalid";
        document.getElementById("msgLabel").style.color = "red";
        document.getElementById("mobNo").style.border = "2px red solid";
    }

}
