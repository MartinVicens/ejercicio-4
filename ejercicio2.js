/* Se recogen los siguientes datos para una encuesta: ciudad, sexo (H o M) y edad (0 a 110)

Calcule e informe los siguientes datos:

Promedio de edad general
Promedio de edad de las mujeres
Promedio de edad de los hombres
Porcentaje de mujeres menores a 21 años
Porcentaje de hombres mayores a 21 años
La mayor edad ingresada de las mujeres
La menor edad ingresada de los hombres
Los tres valores ingresados deben ser validados según corresponda */

var ciudad;
var sexo;
var edad;
var edadGeneral = 0;
var promedioGral = 0;
var edadM = 0;
var edadH = 0;
var mujeresSub21 = 0;
var hombresMas21 = 0;
var promedioH = 0;
var promedioM = 0;
var menorEdadH = 111;
var mayorEdadM = -1;

do {

  do { } while (!isNaN(prompt("Ingrese ciudad")) ); 

  do{edad = parseInt(prompt("Ingrese se edad"));
      edadGeneral += edad;
      promedioGral++;} 
  
  while (!(edad > 0 && edad < 110));

  do {sexo = prompt("Ingrese sexo (H para hombre, M para mujer)").toLocaleUpperCase();
    if (sexo == "H") {
        edadH++;
        promedioH += edad;
        hombresMas21 += edad > 21;
      if (menorEdadH > edad){
          menorEdadH = edad;
      }
    } else if (sexo == "M") {
      edadM++;
      promedioM += edad;
      mujeresSub21 += edad < 21;
      if (mayorEdadM < edad) {
        mayorEdadM = edad;
      }
    }
  } while (!(sexo == "H" || sexo == "M"));}
  
while (confirm("¿desea continuar?"));


document.write(`El promedio de edad general es de ${edadGeneral / promedioGral}<br /> `);
document.write(`El promedio edad de hombres ${promedioH / edadH}<br />`);
document.write(`El promedio edad de mujeres ${promedioM / edadM}<br />`);
document.write(`El porcentaje de hombres mayores a 21 años es de ${(hombresMas21 / edadH) * 100 } % <br />`);
document.write(`El porcentaje de mujeres menores a 21 años es de ${( mujeresSub21 / edadM) * 100} % <br />`);
document.write(`La menor edad ingresada de hombres es ${menorEdadH}<br />`);
document.write(`La mayor edad ingresada de mujeres es ${mayorEdadM}<br />`);
