/* eslint-disable max-len */
import grafanaImage from './assets/grafana.png';

function ProjectIdea() {
   return (
      <div className="flex size-full justify-center">
         <div className="h-auto my-20 w-1/2 text-left space-y-3">
            <h1 className="text-4xl font-bold mb-7">Projektidé</h1>
            <p>WaitLess ska vara ett verktyg som används för att generera köprognoser för nöjesparker. Tanken är att användaren skriver in ett längre spann av datum då den är intresserad av att besöka en nöjespark, och får därefter ett datumförslag på när kömängderna väntas vara som lägst.</p>
            <p>Prognoserna är en sammanräkning av flera olika faktorer. Den viktigaste faktorn är hur köerna har sett ut de dagarna tidigare år, vilket baseras på den egna insamlade datan som beskrivs under sammanfattningen av affärsplanen. Där är det viktigt att tänka på att samma datum tidigare år inte är samma veckodag, och istället måste man se till att man jämför med samma veckodag så nära som möjligt. Om man exempelvis ska beräkna en prognos för den 24 maj 2025, som är en lördag, måste man kolla på siffrorna för den 25:e maj 2024, som också var en lördag. Hade man kollat på den 24 maj hade man förmodligen fått en felaktig prognos eftersom det var en fredag, med helt andra kömönster.</p>
            <p>En annan faktor som ska kunna spela in är väderprognos, förutsatt att datumet är tillräckligt nära i tid. För detta krävs en integration mot en vädertjänst, exempelvis SMHI som har ett öppet API. Detta returnerar dock bara prognos för de kommande tio dagarna, vilket gör att prognoser som är längre bort än så i tid inte kommer kunna ta hänsyn till väder. En ytterligare faktor som kan användas för prognoser är evenemang som äger rum i staden eller parken. För parkernas evenemang går detta att utvinna via deras API:er, men andra evenemang är svårare. Det kan finnas API:er som exponerar den informationen, men det kan också vara så att man inför varje säsong får manuellt leta fram evenemang och sammanställa dessa i en fil. Fördelen med att göra så är att man då kan sätta någon slags poäng på varje evenemang utifrån hur stor påverkan man tror att det har på kömängder.</p>
            <p>Det ska även vara möjligt att se mer generell statistik och få se vad prognoserna baseras på. Detta kan vara för användare som är mer intresserade, och kan presenteras i form av grafer eller andra diagram. Detta liknar mer den metod vi haft för att tidigare visualisera datan, vilket är genom verktyget Grafana (se bild). Det hade kanske också varit möjligt att använda inbäddningar från den existerande Grafanainstansen för detta.</p>
            <img src={grafanaImage} alt="Bild på graf från verktyget Grafana." />
            <p>Applikationen kommer vara headless, där backend byggs med ASP.NET och frontend med React. För driften kommer jag få hjälp av en tidigare kollega, som också var med och skapade den ursprungliga datainsamlingslösningen. Han driver sedan tidigare ett antal webbtjänsten på servrar i sin lägenhet, och där ligger databasen med den hittills insamlade datan. Tanken är att backend med API:et, vilket är den mer prestandatunga delen, körs på hans server, medan de statiska frontend-filerna ligger på en molnserver. Eftersom alla vyer renderas via React behöver användaren bara göra en hämtning från frontend-servern när den öppnar hemsidan, och eftersom servern inte behöver göra något annat än att serva filer så behöver den inte vara särskilt kraftfull.</p>
            <p>En detalj som är viktig att tänka på är att förfrågningar mot databasen behöver vara utformade för att inte vara för tunga. Då exempelvis en månads statistik kan innehålla hundratusentals värden är det viktigt att man hittar en annan lösning än att hämta alla värden. Ett sätt hade kunnat vara att hämta snittvärden och räkna utifrån dem.</p>
         </div>
      </div>
   );
}

export default ProjectIdea;