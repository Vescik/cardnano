
# Serwis administracyjny dla aplikacji CardNano

![Fitness Center Management System](link_do_obrazka)

## Spis treści
- [O projekcie](#o-projekcie)
- [Funkcje](#funkcje)
- [Przebieg pracy](#przebieg-pracy)
- [Wykorzystane narzędzia](#wykorzystane-narzędzia)


## O projekcie
 System umożliwia tworzenie profili organizacji, rejestrację i logowanie użytkowników oraz dostęp do panelu administratora.

## Funkcje
- **Autoryzacja użytkownika**:  Użytkownik ma możliwość rejestracji lub logowania do panelu administracyjnego, dzięki wykorzystaniu Firebase Authentication
- **Zarządzanie organizacjami**: Użytkownicy mogą tworzyć profile organizacji, podając informacje takie jak nazwa organizacji, typ i adres. Profile są przechowywane w bazie danych Firebase Firestore.

- **Autentykacja użytkowników**: Użytkownicy mogą się rejestrować i logować, aby uzyskać dostęp do panelu administratora. Autentykacja jest obsługiwana przy użyciu Firebase Authentication

- **Panel administratora**: Wyświetla tabelę z danymi organizacji, takimi jak identyfikator, typ, adres i nazwa. Organizacje są pobierane z bazy danych Firebase



## Firebase
   - Do projektu ze względu na bezpieczeństwo danych nie został dołączony plik konfiguracyjny Firebase zawierający klucze API
   - Utwórz projekt Firebase i włącz usługi Firestore oraz Authentication.
   - Zamień konfigurację Firebase w pliku src/db/settings.js na konfigurację swojego projektu.


## Wykorzystane narzędzia
- Vue.js - framework JavaScript do tworzenia interfejsów użytkownika.
- Firebase - platforma do budowy aplikacji mobilnych i webowych, która dostarcza infrastrukturę i usługi backendowe, takie jak Firestore do przechowywania danych i Authentication do uwierzytelniania użytkowników.

