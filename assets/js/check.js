var checkboxs = document.querySelectorAll('.checkboxs')

function check() {
    for(let i = 0; i < checkboxs.length; i++) {
        if(checkboxs[i].checked == true) {
            // console.log(checkboxs[i]);
        }
    }
}

var pList= document.querySelectorAll(".category-container p");

for (var i = 0; i <= pList.length; i++) {
    console.log(pList[i]);

    var color = pList[i].getAttribute('data-color');

    if (color == 'personal') {
        pList[i].style.backgroundColor = "var(--lightgreen)";        
    } else if (color == 'work') {
        pList[i].style.backgroundColor = "var(--pink)";

    } else if (color == 'school') {
        pList[i].style.backgroundColor = "var(--orange)";

    } else if (color == 'other') {
        pList[i].style.backgroundColor = "var(--purple)";
    }
}

