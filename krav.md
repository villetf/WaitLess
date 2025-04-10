# Kravlista

| Nummer    | Beskrivning | Löst | Lösning |
| -------- | ------- | ------- | ------- |
| 6  | När app besöks i webbläsaren ska din prototyp renderas med React | Ja | React används
| 7 | React-trädet som renderas som ska bestå av minst 5st komponenter som du skrivit själv och som finns med i källkoden. (alla komponenter behöver inte renderas samtidigt) | Ja | About, Footer, Header, Home, MainContent, BurgerMenu
| 8 | Dina React komponenter är skrivna med JSX syntaxen. | Ja | JSX används
| 9 | Minst två av dina komponenter ska hantera ett "event" i Javascript, exempelvis från användaren. | Ja | BurgerMenu hanterar klick för att öppna och stänga menyn, ParkMenu hanterar klick för att byta park och spara denna till localStorage
| 10 | Minst två av dina komponenter ska använda sig av state för att rendera tillståndsbaserad information. (i.e. "conditional rendering") | Ja | BurgerMenu har ett state för ifall menyn är öppen eller inte, ParkMenu har bl.a. ett state för vilken park som är vald
| 11 | En av dina komponenter använder sig av en Lifecycle metod eller hook för att påverka en annan komponents tillstånd. Render räknas inte som en lifecycle metod. | Ja | useEffect används i ParkMenu för att vid byte av park spara denna till LS och uppdatera statet som innehåller länken till loggan som visas.
| 12 | Via en av komponenterna ska användaren kunna spara information i LocalStorage. | Ja | När man väljer en park sparas denna till LS.
| 13 | Informationen i LocalStorage används vid renderingen av React-trädet. | Ja | Statet chosenPark i ParkMenu hämtas från localStorage, vilket sätter vilken park som är vald.
| 14 | I app används egen css, eller ett bibliotek för att ge dina komponenter stil och form | Ja | Tailwind används för styling.
| 15 | I app används egen css för att ge dina komponenter rörelser | Nej |
