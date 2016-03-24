---
layout: post
title: "algoritmo rubik xunorus anger"
date: 2015-07-06
---
algoritmo Xun-Rubik-AngHer

c3=α+β+γ (FD)
A’,F’,A,F,A,D,A’,D’.[if F=AD:A]
A2,D,A’,D’,A’,F’,A,F.[if F=AD:D]
F’,A,F,A,D,A’,D’.[if 0]

xa4=α+β+γ
T’,D’,A’,D,A,T.[if AD=AI]
F,A,D,A’,D’,F’.[if AI=AT]
I,D’,A,F,A’,F’,A’,F’,A’,F,A,I’,D.[if 0]

a5=α+β+γ (ok a=AI)
F,A2,F’,A’,F,A’,F’.[if aF>D]
F,A,F’,A,F,A2,F’.[if aF>T]
F,A,F’,A,F,A2,F’+A’+F,A,F’,A,F,A2,F’.[if AI=AD]
> arrange=A

xv6=α+β+γ+δ (ok v=FAD)
I',A,D,A',I,A,D',A'.[if FAI>TAI]
A,D,A',I',A,D',A',I.[if FAI>TAD] chequear
T',A',D',A,D,A',D',A,D,A',D',A,D,T.ex-ord.[if 0]
I,D,A2,I',D,F,T,A2,F,T,A2.ex-diag.[if 0]

v7=α+β (on v=FAD)
D',B,D,B',D',B,D,B'.[if vFAD:D]
B,D',B',D,B,D',B',D.[if vFAD:A]
> arrange=A

---------
NOTACION
---------
F frente
I izquierda
D derecha
A arriba
T trasero
B abajo
α Alfa ·
β Beta ·
γ Gamma ·
δ Delta
v vertice
a arista
c centro
x cruz
c3 colocacion de la franja central
x4 cruz de la cara inferior
a5 colocacion de las aristas
v6 colocacion de los vertices
v7 orientacion de los vertices
ex-diag intercambio diagonal
ex-ord intercambio ordinario(FAI-FAD)
ar arriba
der derecha
hor sentido horario
antihor sentido antihorario
> luego/ esta en
: la mitad de
ok pieza en posicion correcta
on sobre la pieza
-----
1 y 2- armar un color
-----------------------
3- capa central, 3 posibilidades:
para girar -F' A F A D A' D' hasta que alguna arista quede para encajar...
a-si la arista del frente(F) quedo arriba> mover la pieza AD hasta que quede en AT (A’ por ejemplo ) y luego F' A F A D A' D'
b-Si el color de la arista del frente esta a la derecha, mover la pieza AD hasta AI y luego >D A' D' A' F' A F.
-----------------------
4-  Cruz cara inferior
a-ADy AI > T' D' A' D A T
b- AI y AT>F A D A' D' F'
c- ninguno
1. si resulta que no tenemos ninguna cara A de ninguna arista mirando hacia arriba aplicamos un movimento cualquiera de los dos anteriores y el cubo quedará como en el caso 1 o 2. Podemos por ejemplo aplicar 1, girar el cubo en sentido contrario de las agujas del reloj y aplicar 2. También podemos aplicar directamente I D' A F A' F' A' F' A' F A I' D
-----------------------
5- Colocacion de las aristas
pieza correctamente colocada quede en la posición AI
a- una arista bien (girar sentido horario) F A2 F' A' F A' F'
b- una arista bien(girar sentido antihorario) F A F' A F A2 F'

c- dos aristas bien
F A F' A F A2 F' || A' || F A F' A F A2 F'
y girar luego la cara A hasta que las aristas queden correctamente colocadas
-----------------------
6- colocacion de vertices
1 vertice en su lugar (aunque este girado). ponerlo en ADF
a1- girar sentido horario I' A D A' I A D' A'
a2- girar sentido antihorario A D A' I' A D' A' I
b- ningun vertice en su sitio
intercambio   T' A' D' A D A' D' A D A' D' A D T
intercambio diagonal I D A2 I' D' F' T' A2 F T A2

-----------------------
7- orientacion de vertices
importante: girar (en sentido horario/hacia la izquierda?)la cara A de manera que la pieza a orientar quede en la posicion FAD y luego
a-p/ girar sentido horario D' B D B' D' B D B'
b- p/ girar sentido antihorario B D' B' D B D' B' D



Como suenan las ecuaciones va a depender de la codificacion, podemos escuchar codificaciones diferentes.

-----
