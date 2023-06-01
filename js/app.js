var i = 0;
var txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et illum perferendis quas doloremque unde aut molestiae omnis ad! Illo minus suscipit nobis ea, odit eligendi commodi sapiente corporis fugiat itaque maiores?';
var speed = 30;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();