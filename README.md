# TutoringCenter
### Final Project For CMPE172 (Spring 2020) at San Jose State University
### by Andres Cortes, Christopher Douglas (@Chrisrdouglas), and Irina Voronova (@IVoronova)

#### Introduction
This application is intended to serve as a check-in/check-out service for tutoring centers. Students can check into the center to notify tutors that they need help. From the employee view of the application, tutors can see all students that are waiting for assistance and check them into a tutoring session. They can then check out these students when the session is over. Employees are also able to view peak check in times and register new students and tutors. In it's current state, there is no authentication so anyone can view any page, but in a complete implementation, employees would need to log in with an id and password. 

#### Sample Screenshots
Student Check-In page
<img
src="StudentCheckIn.JPG"
raw=true
/>

Employee Dashboard page
<img
src="EmployeeDashboard.JPG"
raw=true
/>

Tutor Registration and Management page
<img
src="RegisterTutor.JPG"
raw=true
/>

#### Pre-Requisites
Java 8 or Higher
Maven
A MySQL Client
Node.js and npm

#### Installation / Local Build

Download and extract the project into an empty directory. From the root folder, run the following:
```
mvn clean
mvn package
java -jar target/springboot-0.0.1-SNAPSHOT.jar
```
The above will run both the front and backend.
#### UML Diagrams

#### Schema

#### Database Queries

#### Mid Tier API

#### UI Data Transport

#### References
https://medium.com/@mukundmadhav/build-and-deploy-react-app-with-spring-boot-and-mysql-6f888eb0c600#b282
https://medium.com/@wkrzywiec/how-to-put-your-java-application-into-docker-container-5e0a02acdd6b
https://developer.okta.com/blog/2018/07/19/simple-crud-react-and-spring-boot
