var happyBirthdayText = `
<p id="start">Parabénnnnnns, Júlinhaaaaaa! 🎉🎉🎉🎉🎉🎉

    <img src="files/harryyy.gif" id="gif-intro">
</p>

<h1>Júlia Reis
    <sub>18TOOU</sub>

    <img src="files/juu2.jpg" height="380px" id="imagem-juju">

</h1>



<div id="titles">
    <div id="titlecontent">

        <!-- <p class="center">


        </p> -->

        <p>Feliz aniversário, Júliaaaaaaaaa!
        <br>
        <br>
            Que você continue sendo essa pessoa extremamente humilde, 
            tranquila, inteligente, e que independe do caos. 
            Que você contemple todas as felicidades do mundo (sem drogas) 
            que Deus fortaleça esse ciclo, e que você
            tenha muito sucesso na sua carreira 
            como "EXPERT IN DEVELOPMENT", TMJTTT!
            <br>
            <br>
            Com carinho, Pedro ❤
        </p>

        <hr class="row-entre-msgs">

        <p>Agora tu pode ser presa!
        <br>
        <br>
        Que você tenha muuuuita felicidade e realização nessa nova fase da sua vida,
        com toda certeza estarei aqui nas realizações (lembra quando ficar rica)
        tãma, 
        <br>
        <br>
        então 
        <br>
        tãma
        <br>
        <br>
        Agora a veiera bateu, não tem mais volta
        <br>
        <br>
        amém, amém
        <br>
        🙏🙏🙏🙏🙏🙏🙏
        🙏🙏🙏🙏🙏🙏🙏
        🙏🙏🙏🙏🙏🙏🙏
        <br>
        <br>
        🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉
        </p>

        <hr class="row-entre-msgs">

        <p>Escuta essa sinfonia até o final
        <br>
        <br>
        pq pra fazer esse mísero site me quebrou 
        os braço e a cabeça, kkkkkkkkkjkkkkkk
        tãma
        <br>
        <br>
        🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉
        <br>
        <br>
        não tem jeito, é o pedro
        <br>
        <br>
        🙏🙏🙏🙏🙏🙏🙏
        🙏🙏🙏🙏🙏🙏🙏
        <br>
        <br>
        fé
        <br>
        <br>
        rasta
        <br>
        <br>
        rasta
        <br>
        <br>
        eita rabeta que voa
        <br>
        <br>
        <center><img src="files/nossa.jpg" height="380px" id="imagem-nossa"></center>
        <br>
        <br>
        imaginava essa? kkkjkkkkk
        <br>
        <br>
        tãma
        <br>
        <br>
        perdão pela demora, tinha um bglh que eu não tava conseguindo resolver, mas RESOLVIIIII
        <br>
        <br>
        amém, amém
        <br>
        🙏🙏🙏🙏🙏🙏🙏
        🙏🙏🙏🙏🙏🙏🙏
        <br>
        <br>
        fimmmmmse 
        <br>
        <br>
        espera, não é pseudocódigo, 
        <br>
        kkkkkkkkjk o cara brinca
        <br>
        <br>
        bjs de luz
        <br>
        <br>
        😘😘😘😘😘😘😘
        </p>
    </div>
</div>

<iframe style="visibility:hidden" width="560" height="315" src="https://www.youtube.com/embed/1KAOq7XX2OY"
    frameborder="0" allowfullscreen></iframe>
`;

function playAudio() {
  var x = document.getElementById("myAudio");
  x.play();
}

function sedivirta() {
  document.getElementById("bodyTag").innerHTML += happyBirthdayText;

  var x = document.getElementById("myAudio");
  x.play();

  document.getElementById("button-siiirva").remove();
}
