function frasesaleatorias ()
{
frases = new Array();
autores = new Array();
frases[0] = "PHP es un mal menor perpetrado y creado por amaterus incompetentes, mientras que Perl es un gran e insidioso mal perpetrado por hábiles pero pervertidos profesionales";
frases[1] = "Las únicas personas que tienen algo que temer de software libre son aquellos cuyos productos tienen un valor aún menor";
frases[2] = "Hay una antigua historia sobre una persona que quería que su ordenador fuese tan fácil de utilizar como su teléfono. Estos deseos se han hecho realidad, ya no sé cómo usar mi teléfono";
frases[3] = "Sólo hay dos industrias que se refieren a sus clientes como 'usuarios";
frases[4] = "Todos somos aficionados. La vida es tan corta que no da para más";
autores[0]="Jon Ribbens";
autores[1]="David Emery";
autores[2]="Bjarne Stroustrup";
autores[3]="Edward Tufte";
autores[4]="Charles Chaplin";
aleatorio = Math.random() * (frases.length);
aleatorio = Math.floor(aleatorio);
document.write("&#34;");
document.write(frases[aleatorio]);
document.write("&#34;");
document.write('<br>');
document.write(autores[aleatorio]);
autores(aleatorio)
}

function myFunction()
{
x=document.getElementById("demo")
x.style.color="#ff0000";
x.style.backgroundColor="#CC6633";
}
