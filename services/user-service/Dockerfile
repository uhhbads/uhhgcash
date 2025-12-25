FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
COPY pom.xml ./
RUN mkdir -p src
COPY . .
RUN ./mvnw -v || true
EXPOSE 8080
CMD ["./mvnw","spring-boot:run"]
