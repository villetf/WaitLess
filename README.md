# WaitLess

Waitless är en webbapplikation som används för att generera köprognoser för nöjesparker.

## Om projektet

Applikationen bygger på historisk data från 2023 och framåt, insamlad från nöjesparkerna Liseberg och Gröna Lund. Genom att analysera denna data kan WaitLess förutse vilka datum som väntas ha lägst kötider.

### Projektstruktur

- **Frontend**: Byggd i React med Vite.
- **Backend**: Byggd i ASP.NET.
- Båda finns i detta repo under mapparna `frontend` respektive `backend`.

## Återanvändbar React-komponent

React-komponenten BurgerMenu är en återanvändbar komponent, vilket innebär att den utan modifiering kan användas i ett annat projekt. Den består av en hamburgermeny (tre horisontella streck ovanpå varandra), som vid klick fäller ut en meny på sidans högra kant samtidigt som resten av sidan tonas ned. Tanken är att menyn fylls med länkar och andra resurser. Vid klick på en länk i menyn (`<a>` eller `<Link>`) stängs menyn automatiskt.

Menyn används genom att man placerar BurgerMenu-komponenten där man vill ha menyknappen. Innehållet man vill ha i menyn innanför BurgerMenu-taggarna. Propen backgroundColor används för att ange menyns bakgrundsfärg i hexadecimal form (inklusive nummertecken(#)), men är valfri.

```jsx
<BurgerMenu backgroundColor='#4fc8b0'>
   <div className='mt-20'>
      <Link to='/'><h1 className='text-3xl'>WaitLess</h1></Link>
   </div>
   <nav className="flex flex-col items-center mt-10 w-1/2 space-y-3">
      <Link to='/generate'><h6>Generera ett datum</h6></Link>
      <Link to='/stats'><h6>Statistik för nördar</h6></Link>

      <Link to='/about'><h6>Om WaitLess</h6></Link>
      <Link to='/contact'><h6>Kontakt</h6></Link>
   </nav>
</BurgerMenu>
```

## Körning i utvecklingsmiljö

### Frontend

För att starta webbservern för utveckling, följ nedanstående steg:

1. Ladda ner projektet genom att clonea det eller ladda ner som zip.
2. Starta en terminal och navigera till mappen `frontend` i projektmappen som just laddades ner.
3. Kör: 
   ```bash
   npm install
   npm run dev
   ```
4. Gå till den URL som visas i terminalen. Notera att även backend behöver köras för att applikationen ska fungera korrekt (se punkten Backend), eller så behöver en miljövariabel vara satt för att gå mot det publika API:et (se punkten Miljövariabler).

### Backend

För att starta .NET-servern för utveckling, följ följande steg:

1. I en terminal, navigera till mappen `backend` i projektmappen.
2. Kör `dotnet run`.
3. URL:en som visas är länken till API:et. För att frontend ska gå mot denna behöver den sättas som miljövariabel, se punkten "Miljövariabler".

### Databas

De miljontals datapunkter som applikationen använder för att beräkna prognoser lagras på en MariaDB-instans på samma server som backend körs på. På grund av detta är det komplicerat att sätta upp sin egen lokala databas, och rekommendationen är att istället använda det publikt tillgängliga API:et även i lokal miljö. Det kan vara möjligt att med hjälp av en migration skapa en databas från .NET-projektet och fylla denna med mockdata, men detta är inte testat eller supportat.

### Miljövariabler

För att styra vilket API som frontend går mot används miljövariabler. För att göra detta, skapa en .env-fil i `frontend/` med innehållet:
```
VITE_API_URL=http://localhost:5017
VITE_ENVIRONMENT=development
```

Alternativt kan miljövariablerna sättas manuellt innan körning. Hur detta görs varierar beroende på operativsystem, och guider till detta finns på internet.


## Deployment

### Frontend

Både produktions- och testmiljön deployas till DigitalOcean via en koppling till Github. En uppdatering i respektive branch (main eller dev) triggar automatiskt ``npm run build`` i appen i DigitalOcean. Det innebär att miljöerna uppdateras utan att man manuellt behöver bygga projektet före commit, och det finns heller inte någon dist-mapp i Github-repot. Miljövariabler i DigitalOcean styr vilket API respektive miljö går mot, så testmiljön går alltid mot test-API:et, och produktionsmiljön går alltid mot prod-API:et. 

### Backend

Precis som i frontend finns både ett test-API och ett prod-API, som ska spegla brancharna main och dev. Båda dessa miljöer körs på en egen server i Kalmar hemma hos den driftansvarige. Vid uppdatering i respektive branch körs en Github Action som komplierar och lägger ut den nya koden på servern. Detta sker via en Github-runner som är installerad på servern, och workflow-filerna finns i mappen `.github/workflows/` i detta repo.

## API-dokumentation

En Swagger-instans går att nå i den publika testmiljön: https://waitless-test.kejjrod.com/swagger/index.html.

Notera att de Post-endpoints som finns inte skriver något utan hämtar data baserat på de krav som anges i bodyn. Anledningen till detta är att det inte är rekommenderat att skicka en body i ett Get-anrop. Man kan dock resonera att den ändå skapar något eftersom endpointen används för att generera en unik prognos.

## Branching-strategi

Branching-strategin bygger på gitflow-arbetsflödet. När man skapar en pull request från ett issue (i enlighet med gitflow) så ska PR:en mergas till dev-branchen. Dev-branchen är i sin tur ansluten till en testmiljö som automatiskt uppdateras vid en merge till dev-branchen. När alla issues som ska ingå i en version är mergade till dev och testade i testmiljön så mergas dev-branchen till main. Vid merge till main uppdateras automatiskt produktionsmiljön. 

Utöver dessa branchar skapas även en kopia på main-branchen inför varje inlämning, för att skapa en intakt kopia av hur main-branchen såg ut då. Denna döps till namnet på uppgiften.

## Länkar

Produktionsmiljö finns tillgänglig [här](https://waitless-prod-xlyum.ondigitalocean.app/).

Testmiljön finns tillgänglig [här](https://waitless-test-p9542.ondigitalocean.app/).
