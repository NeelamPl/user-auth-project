#Use Java 17 base image (matches Spring Boot 3)
FROM eclipse-temurin:17-jdk-alpine
# Set working directory inside container
WORKDIR /app
# Copy jar file into container
COPY target/backend-0.0.1-SNAPSHOT.jar app.jar
# Expose application port
EXPOSE 8082
# Run the application
ENTRYPOINT ["java","-jar","app.jar"]

#EXPOSE 8081 → must match server.port=8081
#target/*.jar → flexible for version changes