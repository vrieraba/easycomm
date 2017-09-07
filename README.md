# EasyComm

Full stack Web Application including top new technologies:
* Build
** Maven

* Backend - Rest Api
** SpringBoot

* Frontend - Dynamic Single Page App
** Bootsrap
** Angular 4

## Development server
* Backend:
Run form IDE main class `EasyCommApplication`. Rest service available in `http://localhost:8080/`

* Frontend:
Go to folder `easycomm\frontend\src\main\frontend` and run command `npm start`. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

```bash
cd easycomm
mvn clean
mvn install
cd backend
mvn spring-boot:start
```