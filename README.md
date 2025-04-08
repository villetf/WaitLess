# WaitLess

Waitless är en webbapplikation som används för att generera köprognoser för nöjesparker.

## Användning

Applikationen körs med Vite. För att start webbservern, följ följande steg:

1. Ladda ner projektet genom att clonea det eller ladda ner som zip.
2. Starta en terminal och navigera till projektmappen som just laddades ner.
3. Kör `npm install`.
4. Kör `npm run dev`.
5. Gå till den URL som visas i terminalen.


## Branching-strategi

Branching-strategin bygger på gitflow-arbetsflödet. När man skapar en pull request från ett issue (i enlighet med gitflow) så ska PR:en mergas till dev-branchen. Dev-branchen är i sin tur ansluten till en testmiljö som automatiskt uppdateras vid en merge till dev-branchen. När alla issues som ska ingå i en version är mergade till dev och testade i testmiljön så mergas dev-branchen till main. Vid merge till main uppdateras automatiskt produktionsmiljön . 

Utöver dessa branchar skapas även en kopia på main-branchen inför varje inlämning, för att skapa en intakt kopia av hur main-branchen såg ut då. Denna döps till namnet på uppgiften.

## Länkar

Testmiljön finns tillgänglig [här](https://waitless-prod-xlyum.ondigitalocean.app/).

Produktionsmiljön finns tillgänglig [här](https://waitless-test-p9542.ondigitalocean.app/).