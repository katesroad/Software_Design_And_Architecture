#  REST Architecture for SOA

## Learning Objectives

- Identify REST design principles.
- Apply REST architecture (i.e. JSON over HTTP, URI)
- Create a system using REST interfaces.
- Identify principles of good API design.
- Understand microservice architecture.


## REST architecture

### Features of REST architecture

- REST achitecture is a **client-server architecture** based upon a request response design.
- REST is a layered system
- Constraints for restful
  - Interaction must be stateless(send authentication for every request)
  - **Client can cache**(Server add informatiob to the response to label it as cacheable or non-cachable)
  - There must be a uniform interface for communication between the client and the server(URI and HTTP methods)
  - Three specific ways
    >1. JSON, XML, Simple Text

### Practices you should follow

- Guidelines
  - Use only nouns for a URI
  - GET methods should not alter the state of your resources
  - Use plural nouns for a URI
  - Use sub-resources for relationship between resources

Example:
```bash
GET  /students/3/courses
GET /students/3/courses/2
```

Because the relationship is transparent in your URL.

  - use HTTP headers to specify the input output format
    >1. Content-Type
    >2. Accept
    >3. Status code
  - Provide users with filters and pagination
  - version the API

```bash
http://api.example.com/v2/students/243/courses
```
  - Provide correct HTTP Code
    >1. 201 A new source has been created
    >2. 204 a resource has been deleted.

## Microservices

Lecture video: https://www.coursera.org/learn/service-oriented-architecture/lecture/YbECT/4-3-3-introduction-to-microservices

- Monolithic application
  - Hard to maintain and scale
  - Took a long time to develop
  - Suffered from performance issue

- SOA
  provides priciples to guide developers to break down the functionality of their monolithic enterprises into smaller, more manageable, modular services. These services are loosely coupled and strictly encapsulated.
  This modularization allows the smaller services to be tools that can be used to perform a task by internal or external organizations.

- Microservices
  - Can be thought of as a variabtion of SOA applied on an application scale.
  - A microservice is a process that is responsible for performing a single independent task. It is typically designed for a specificied task.
  - **Usually, each microservice control and manage its own data.**

Microservices brings scalablity, error tolerance to application by staring multiple instances.

Give the teams ability of develop parallelly, and independently.
  - Some centralized management should be applied to coordinate the microservices.
  - Testing a distributed system would be more complicated due to changing testing conditions.