Aplikacja Pogodowa

Copyright:
Wszelkie dane są pobierane z API www.accuweather.com



Założenia:
1) Zadaniem aplikacji jest obliczanie i prezentacja informacji astronomicznych dotyczących pogody.

2) Informacje prezentowane przez aplikację to:
• Wchód
• Zachód

3) Lokalizacja wprowadzona przez użytkownika (miejscowość)
dla której wyświetlane są dane.

4) Informacje astronomiczne powinny być odświeżane po każdym ponownym wyszukaniu miejscowości. 

5) Do wyszukiwania informacji astronomicznych wykorzystujemy publicznie dostępne API z www.accuweather.com 

6) Obliczone dane powinny być prezentowane w przejrzystej formie niezależnie od typu
urządzenia (telefon/tablet). W tym celu należy zaprojektować interfejs dla co najmniej 2 urządzeń.
Układ fragmentów na ekranie powinien być zależny od jego orientacji i rozdzielczości.
Aplikacja powinna uwzględniać co najmniej 4 różne layouty (tablet/telefon, orientacja pionowa/pozioma).
W układzie pionowym na telefonie fragmenty powinny być przewijane (w tym celu można wykorzystać widok ViewPager).
W przypadku tabletów wszystkie fragmenty mogą być
jednocześnie widoczne na ekranie.


Założenia:
1) Niniejsze ćwiczenie zakłada pobieranie i wyświetlanie informacji o
warunkach pogodowych (bieżących i prognozowanych) dla lokalizacji wybranych przez użytkownika.
2) Dane pogodowe można pobrać korzystając z API udostępnianego przez serwis accuweather. Dane nie są dostępne do pobrania. Są jedynie wyświetlane w serwisie.
 Szczegółowe
informacje dla programistów chcących korzystać z plików udostępnianych w ramach
portalu yahoo.com można znaleźć pod adresem: http://developer.yahoo.com/weather/
Przykładowe zapytania:
• Do pobrania identyfikatora WOEID na podstawie nazwy miejscowości:
Link1 (https://query.yahooapis.com/v1/public/yql?q=select * from
geo.places(1) where text="lodz, pl”)
• Do pobrania informacji pogodowych na podstawie identyfikatora WOEID:
Link2 (https://query.yahooapis.com/v1/public/yql?q=select * from
weather.forecast where woeid=505120 and u=“c")
3) Aplikacja powinna umożliwiać użytkownikowi zdefiniowanie listy ulubionych lokalizacji,
dla których będą pobierane dane pogodowe. Po wprowadzeniu lokalizacji aplikacja
5
sprawdza w serwisie Yahoo czy wpisane dane są poprawne i pobiera identyfikator
WOEID, a następnie zapamiętuje lokalizację w bazie danych.
4) W momencie uruchomienia aplikacja powinna sprawdzać czy możliwe jest połączenie z
internetem. Jeżeli tak, pobierane są aktualne informacje na temat pogody i zapisywane
w pamięci telefonu (w prywatnym katalogu aplikacji).
5) Jeżeli żadne połączenie internetowe nie jest aktywne w chwili uruchomienia aplikacji,
informacje na temat pogody powinny zostać wczytane z pliku, który został zapisany
podczas ostatniego połączenia. Ponadto użytkownik powinien być poinformowany o
tym, że dane mogą być nieaktualne, a do aktualizacji wymagane jest połączenie
internetowe.
Uwaga: Warto zastanowić się czy konieczne jest pobieranie informacji z internetu przy
każdym uruchomieniu aplikacji. Wśród informacji dostarczanych w pliku XML znajduje się
czas, przez który dane mogą być trzymane w pamięci podręcznej, bez konieczności
odświeżania. Można również z góry założyć pewien czas, przez który dane nie będę
odświeżane.
6) Dane pogodowe powinny być prezentowane w przejrzystej formie. W tym celu należy
rozbudować dotychczasowy interfejs aplikacji z ćwiczenia 2. o dodatkowe fragmenty,
np.:
• Fragment 1 – podstawowe dane, tj.: nazwa miejscowości, współrzędne geograficzne,
czas, temperatura, ciśnienie, opis i reprezentacja graficzna warunków pogodowych.
• Fragment 2 – dane dodatkowe np.: informacje o sile i kierunku wiatru, wilgotności,
widoczności.
• Fragment 3 – prognoza pogody na nadchodzące dni.
Układ fragmentów na ekranie powinien być zależny od jego orientacji i rozdzielczości.
7) W aplikacji powinno być dostępne menu, które umożliwi:
• Odświeżenie informacji z internetu na żądanie użytkownika.
• Ustawienie/zmianę lokalizacji, dla których pobierane są dane.
• Wybór jednostek miary stosowanych w aplikacji.

![alt text](https://github.com/AMordaka/Android-AstroWeather/blob/master/other/1.PNG)

![alt text](https://github.com/AMordaka/Android-AstroWeather/blob/master/other/2.PNG)

![alt text](https://github.com/AMordaka/Android-AstroWeather/blob/master/other/3.PNG)

![alt text](https://github.com/AMordaka/Android-AstroWeather/blob/master/other/4.PNG)

![alt text](https://github.com/AMordaka/Android-AstroWeather/blob/master/other/5.PNG)

