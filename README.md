# WaitLess

Waitless är en webbapplikation som används för att generera köprognoser för nöjesparker.

## Användning

Applikationen körs med Vite, vilket också är byggsystemet som används. För att starta webbservern för utveckling, följ följande steg:

1. Ladda ner projektet genom att clonea det eller ladda ner som zip.
2. Starta en terminal och navigera till projektmappen som just laddades ner.
3. Kör `npm install`.
4. Kör `npm run dev`.
5. Gå till den URL som visas i terminalen.

### Byggning i produktions- och testmiljö

Både produktions- och testmiljön deployas till DigitalOcean via en koppling till Github. När en uppdateringar sker i respektive branch (main eller dev) körs automatiskt ``npm run build`` i appen i DigitalOcean. Det innebär att miljöerna uppdateras utan att man manuellt behöver bygga projektet före commit, och det finns heller inte någon dist-mapp i Github-repot.

## Branching-strategi

Branching-strategin bygger på gitflow-arbetsflödet. När man skapar en pull request från ett issue (i enlighet med gitflow) så ska PR:en mergas till dev-branchen. Dev-branchen är i sin tur ansluten till en testmiljö som automatiskt uppdateras vid en merge till dev-branchen. När alla issues som ska ingå i en version är mergade till dev och testade i testmiljön så mergas dev-branchen till main. Vid merge till main uppdateras automatiskt produktionsmiljön. 

Utöver dessa branchar skapas även en kopia på main-branchen inför varje inlämning, för att skapa en intakt kopia av hur main-branchen såg ut då. Denna döps till namnet på uppgiften.

## Länkar

Produktionsmiljö finns tillgänglig [här](https://waitless-prod-xlyum.ondigitalocean.app/).

Testmiljön finns tillgänglig [här](https://waitless-test-p9542.ondigitalocean.app/).
