/* eslint-disable max-len */

function BusinessPlan() {
   return (
      <div className="flex size-full justify-center">
         <div className="h-auto my-20 w-1/2 text-left space-y-3">
            <h1 className="text-4xl font-bold mb-7">Affärsplan</h1>
            <p className="">
               Nedan följer en sammanfattning av affärsplanen för WaitLess.
            </p>
            <p>
               WaitLess är en webbapplikation som används för att generera köprognoser för nöjesparker. Vid lansering stöds endast parkerna Liseberg och Gröna Lund, men det ska vara enkelt att utöka med fler parker i framtiden. Prognoserna baseras främst på sedan tidigare insamlad ködata, men även på väderprognoser och planerade evenemang.
            </p>
            <p>
               Idéen uppstod under ett besök på Liseberg i maj 2023, och kort efter det byggdes en lösning för insamling av ködata från nöjesparkernas appar. Lösningen driftsattes för Liseberg i juni 2023, och för Gröna Lund i september 2023. Sedan dess har data från 69 attraktioner samlats in en gång per minut, vilket motsvarar drygt 8 miljoner användbara mätvärden (mätvärden från när parken varit öppen).
            </p>
            <p>
               Syftet med WaitLess är att göra denna data allmänt tillgänglig genom ett webbgränssnitt där användaren kan ange ett datumspann då den är intresserad av att besöka en nöjespark, och därefter tar verktyget fram datumet med minst förväntad kötid.
            </p>
            <h4 className="font-bold mt-7 text-xl">Mål</h4>
            <p>
               I affärsplanen specificeras tre mål för projektet:
            </p>
            <ul className="list-disc">
               <li>En plattform ska finnas tillgänglig för allmänheten senast den 31 december 2025.</li>
               <li>Vi ska ha nått 10 000 genererade köprognoser senast den 31 december 2026.</li>
               <li>Under 2026 ska webbapplikationen ha haft en tillgänglighet på minst 98%.</li>
            </ul>
            <h4 className="font-bold mt-7 text-xl">Inkomstmodell</h4>
            <p>
               Inkomstmodellen är uppdelad i olika stadier beroende på mängden användare.
            </p>
            <h5 className="text-lg mb-1">Stadie 1 (0-10 000 användare)</h5>
            <p>
               Intäkter sker främst genom generell annonsering. In bit in i stadiet kan man överväga mer riktad annonsering (t.ex. hotell och restauranger i närheten av parkerna).
            </p>
            <h5 className="text-lg mb-1">Stadie 2 (10 000-100 000 användare)</h5>
            <p>
               Ett affiliate-program utvecklas tillsammans med nöjesparker. Efter att användaren fått ett datumförslag kan denne köpa biljetter via en länk till parkens egen hemsida. Provision utgår på köp som gjorts via länken.
            </p>
            <h5 className="text-lg mb-1">Stadie 3 (100 000+ användare)</h5>
            <p>
               Tjänsten kan säljas som en helhet till nöjesparkerna och integreras med deras egen hemsida och app. Driften kvarstår hos oss.
            </p>
            <h4 className="font-bold mt-7 text-xl">Budget och nytta</h4>
            <p>
               Projektets totala kostnad är beräknad att uppgå till 251 119 kr, fördelat på budgetposterna nedan. Kostnaderna kan dock reduceras kraftigt om projektteamet arbetar oavlönat till en början.
            </p>

            <table>
               <thead>
                  <tr>
                     <th>Kostnadstyp</th>
                     <th>Kostnadspost</th>
                     <th>Antal</th>
                     <th>Pris/enhet (SEK)</th>
                     <th>Pris (SEK)</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Interna kostnader</td>
                     <td>Projektledare</td>
                     <td>80</td>
                     <td>400/h</td>
                     <td>32 000</td>
                  </tr>
                  <tr>
                     <td></td>
                     <td>Webbutvecklare</td>
                     <td>248</td>
                     <td>500/h</td>
                     <td>124 000</td>
                  </tr>
                  <tr>
                     <td></td>
                     <td>Driftansvarig</td>
                     <td>32</td>
                     <td>500/h</td>
                     <td>16 000</td>
                  </tr>
                  <tr>
                     <td></td>
                     <td>Oförutsedda kostnader</td>
                     <td></td>
                     <td></td>
                     <td>10 000</td>
                  </tr>
                  <tr>
                     <td>Externa kostnader</td>
                     <td>UX-designer</td>
                     <td>80</td>
                     <td>850/h</td>
                     <td>68 000</td>
                  </tr>
                  <tr>
                     <td></td>
                     <td>Server Azure</td>
                     <td>888</td>
                     <td>0,969/h</td>
                     <td>860</td>
                  </tr>
                  <tr>
                     <td></td>
                     <td>Domännamn</td>
                     <td>1</td>
                     <td>259/år</td>
                     <td>259</td>
                  </tr>
                  <tr>
                     <td><strong>Totala kostnader</strong></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td><strong>251 119</strong></td>
                  </tr>
               </tbody>
            </table>

            <p>
               Projektets uppskattade nyttor uppgår till 316 051 kr efter fem år, vilket skapar en nettonytta på 64 932 kr. Nyttorna specificeras i tabellen nedan.
            </p>

            <table>
               <thead>
                  <tr>
                     <th>Nytta</th>
                     <th>Uppsk. värde år 1</th>
                     <th>Uppsk. värde år 2</th>
                     <th>Uppsk. värde år 3</th>
                     <th>Uppsk. värde år 4</th>
                     <th>Uppsk. värde år 5</th>
                     <th>Uppsk. värde första 5 åren</th>
                     <th>Kommentar</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Annonsintäkter</td>
                     <td>24 000</td>
                     <td>28 800</td>
                     <td>34 560</td>
                     <td>41 472</td>
                     <td>59 719</td>
                     <td>188 551</td>
                     <td>Siffrorna är beräknade utifrån en användarbas på 10 000 första året, med en årlig ökning på 20%.</td>
                  </tr>
                  <tr>
                     <td>Ökade affärsmöjligheter</td>
                     <td>5 000</td>
                     <td>7 500</td>
                     <td>15 000</td>
                     <td>35 000</td>
                     <td>65 000</td>
                     <td>127 500</td>
                     <td>Mycket svårvärderat. Lär ge mindre värde första åren för att sedan öka exponentiellt.</td>
                  </tr>
               </tbody>
            </table>

            <p>Affärsplanen i sin helhet finns <a href="/public/Affärsplan_WaitLess.pdf" target="_blank" className="text-blue-500 underline">här</a>.</p>
         </div>
      </div>
   );
}

export default BusinessPlan;