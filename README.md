# Case App Archetype - jBPM 7

Base Archetype used to build case managements apps in jBPM7.

This Archetype allows you to easily build a base case management application
and extend it to build upon it and extend as needed.

How to run it
--------------------
1. clone this repository
2. build the archetype with maven (mvn clean install)
3. Change to directory of your choice where you want to build the 
base case app from this archetype.
4. Create the base case app from the archetype with:
```
mvn archetype:generate 
   -DarchetypeGroupId=org.jbpm.apps 
   -DarchetypeArtifactId=caseapp-archetype 
   -DarchetypeVersion=1.0-SNAPSHOT 
   -DgroupId=org.jbpm.demo.apps 
   -DartifactId=demo-app 
   -DarchetypeCatalog=local
```
or use this one-liner
```
mvn archetype:generate -DarchetypeGroupId=org.jbpm.apps -DarchetypeArtifactId=caseapp-archetype -DarchetypeVersion=1.0-SNAPSHOT -DgroupId=org.jbpm.demo.apps -DartifactId=demo-app -DarchetypeCatalog=local
```
5. Change the prompted values during the generation as needed (or leave the defaults)
6. Compile your generated case app with 
```
mvn clean install
```
7. Go to your demo apps *-web* directory (for example /demo-app/demo-app-web)
8. Run your demo app with:
```
java -Dorg.kie.server.location=http://localhost:8080/rest/server -jar target/demo-app-web-1.0-SNAPSHOT-swarm.jar
```
(make sure you change the jar name here to match the name of the jar of your case app name)

9. Access your app via
```
http://localhost:8080
```

How to logon
----------------
By default there is one pre-defined user for the case app:

User name | Password
------------ | -------------
user | user1!
