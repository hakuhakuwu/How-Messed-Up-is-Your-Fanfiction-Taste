window.onload = function() {
    document.getElementById("refresh").style.display="none";
};


function clearBoxes(){
    var checkedBoxes = document.querySelectorAll('input:checked') 
    for (var i = 0; i < checkedBoxes.length; i++) { 
        checkedBoxes[i].checked = false;
    }
}

//Calculates your score
function calculateScore() {
    var totalChecked = document.querySelectorAll('input[type="checkbox"]:checked') 
    var score = 130 - totalChecked.length 

    //Associates your score with what it says about you
    var meaning;
    if (score >= 130) {
        meaning = "You do not read fanfiction."
    } else if (score >= 120) {
        meaning = "You&#39ve read like. one fanfic and probably against your will. Or you are incredibly pure."
    } else if (score >= 100) {
        meaning = "I feel like you&#39re more into fluff and coffee shop AUs"
     } else if (score >= 78) {
        meaning = "You&#39ve seen your fair share but probably didn&#39t try to explore <em>that</em> much. you probably just stick to bdsm at most"
       } else if (score >= 50) {
        meaning = "There&#39s something a little bit off about you. It was the A/B/O wasn&#39t it."    
    } else if (score >= 35) {
        meaning = "God gave you the midnight hours to explore the deep blue sea of AO3"
    } else if (score >= 11) {
        meaning = "Virgin in theory, whore in practice."
    } else {
        meaning = "God is watching you" 
    }

    var scoreDiv = document.getElementById("score"); 
    var meaningDiv = document.getElementById("meaning"); 
    scoreDiv.innerHTML = "Your Score: " + score.toString() 
    meaningDiv.innerHTML = meaning 
    document.getElementById("refresh").style.display="inline"; 
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}


function clearPage() {
    clearBoxes() 
    var scoreDiv = document.getElementById("score"); 
    var meaningDiv = document.getElementById("meaning"); 
    scoreDiv.innerHTML = "" 
    meaningDiv.innerHTML = "" 
    document.getElementById("refresh").style.display="none"; 
}
