# Veloc-Back

Apres un exercice sur l'UML, j'ai créé une bdd sur workbench.


Ennoncé de l'exercice : 

Une société de location de bicyclettes souhaite créer un système d’information qui lui permette de stocker les données relatives à toutes ses réservations et locations. Le système doit répondre aux exigences suivantes :
•	Il doit être possible de stocker le numéro d’identification national (NIN), le numéro d’identification fiscale (NIF), le nom et l’adresse de chaque client. Le NIN et le TIN doivent être différents pour chaque client et tous les clients doivent avoir au moins un NIF et un nom.
•	La base de données doit également contenir des informations sur les modèles de vélos qui peuvent être loués – chaque modèle a un nom unique, un type (qui ne peut être que route, montagne, bmx ou hybride) et le nombre de vitesses.
•	Chaque vélo a un numéro d’identification unique et un modèle.
•	L’entreprise dispose de plusieurs magasins où les vélos peuvent être retirés et retournés. Chacun de ces magasins est identifié par un nom unique et possède une adresse ( les deux sont obligatoires).
•	Lorsqu’une réservation est effectuée, les données suivantes doivent être connues : quel client a effectué la réservation, quand il viendra chercher le vélo (jour), quel modèle de vélo il souhaite et où il viendra chercher le vélo (magasin).
•	Lorsqu’un vélo est retiré, le vélo qui a été retiré doit être stocké dans la base de données.
•	Lorsqu’un vélo est restitué, la date de restitution doit être enregistrée dans la base de données.

J'ai rajouté l'idée que la société avait des magasins donc un principe de role. Admin/modo/user
L'idée qu'un velo peut etre loué a l'heure, demi-journée, journée et semaine
Qu'un magasin a une flotte de vélos et enfin un payement
Il manquait aussi des images 

 A regarder dans le dump.sql

L'idée est aussi de pouvoir mettre en pratique typescript et typeORM.
 
But creer un backend Node/typescript/typeORM

Un dossier doc pour suivre les avancées
