function adduser(){
    player1name=document.getElementById("p1name").value;
    player2name=document.getElementById("p2name").value;

    localStorage.setItem("name1", player1name);
    localStorage.setItem("name2", player2name);
    
    window.location.replace("quiz_game_page.html");
}