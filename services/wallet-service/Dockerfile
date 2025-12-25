FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
COPY pom.xml ./
COPY . .
RUN ./mvnw -v || true
EXPOSE 8080
CMD ["./mvnw","spring-boot:run"]
