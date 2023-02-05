function openTab(whichTab){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i=0; i<tabcontent.length;i++){
        tabcontent[i].getElementsByClassName.display="none";
    }

    tablinks = document.getElementsByClassName("tablinks")
    for (i=0;i<tablinks.length;i++){
        tablinks[i].className=tablinks[i].className.replace("active","")
    }

    document.getElementById(whichTab).style.display="block";
    
}