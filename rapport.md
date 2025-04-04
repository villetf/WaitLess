# Rapport

### Metod för källkodshantering

Tekniken för källkodshantering jag kommer använda är git och metoden är gitflow. Det innebär att det som behöver göras bryts ner till issues i Github, som man senare börjar arbeta på genom att skapa en ny branch. När issuet är färdigt mergas branchen in i main-branchen genom en pull request.

### Motivering för källkodshantering

Anledningen till att jag valt att använda git är eftersom det är det enda jag kan, det absolut största i branschen och (vad jag vet) det enda som går att använda med Github. Gitflow har jag valt eftersom det är den metod jag brukar arbeta med och är van vid. Den gör det också enkelt att börja samarbeta med fler personer i projektet i ett senare skede, ifall det skulle behövas.

### Ramverk

Javascript-ramverket React, som jag kommer använda, är relativt fritt i hur man strukturerar sin kod. Generellt förenklar React i att skapa en välstrukturerad kod eftersom man genom att använda komponenter kan slippa upprepande kod, och dessutom kan tillämpa Single responsibility principle genom den modulära struktur som React använder. Det modulära systemet gör det också enklare att skapa enhetlighet i applikationen eftersom man genom att återanvända komponenter kan se till att de alltid är likadana.

När man pratar om ren läsbarhet så gör React koden mer läsbar eftersom många av de saker som faktiskt ska utföras sköts helt av React, vilket gör att man kan få mer gjort på färre rader kod. Det är även en fördel att kunna skriva mer omfattande HTML-strukturer i React istället för att behöva använda Javascript för att skapa och strukturera elementen. React gör alltså utvecklingsarbetet både snabbare och enklare.