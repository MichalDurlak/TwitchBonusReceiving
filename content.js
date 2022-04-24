var myVar;

function myFunction() {
  myVar = setTimeout(getBonus, 3000);
}

function getBonus(){
    var isAvailable = document.getElementsByClassName('ScCoreButton-sc-1qn4ixc-0 ScCoreButtonSuccess-sc-1qn4ixc-5 ffyxRu gjXDMG');
    if (isAvailable.length > 0){
        document.getElementsByClassName('ScCoreButton-sc-1qn4ixc-0 ScCoreButtonSuccess-sc-1qn4ixc-5 ffyxRu gjXDMG')[0].click()
        console.log("BONUS CLICKED");
    } else {
        console.log("BONUS HIDEN");
    }
}

setInterval(myFunction,10000);
