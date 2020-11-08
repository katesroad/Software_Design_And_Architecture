# Module 1: Web Technologies


## Introduction to service oriented architecture

**Service-oriented architecture** examines how to build, use, and combine
services. Instead of creating large software suites that do everything,  service-oriented architecture reaches software goals by building and using 
 and designing an architecture that supports their use.

- Two parties in services oriented architecture
  - provider
  - requester

- For Service Oriented Architecture(SOA), factors to consider when choosing an external service:
  - Response Time
  - Supportability
  - Availability

- Once services are built and being provided, it provides
  - Modularity
  - Extensibility
  - code reuse

- Our main architectural view is that we do two things when we look at a problem.

>1. We look at what the client is doing, and we try and identify if from the client's standpoint, what are the things that they do that can be kind of **encapsulated into conceptual chunks**. 

Those we call services. So for example, in the engineering applications we do, one of the services that clients have to worry about is the sign off steps that occur in engineering workflow. Where designs go through various stages, and once they're signed off, aspects of that design are frozen. And then if you want to change them, you have to go back, and then you have to start the workflow process again. That whole management of change part can be encapsulated as a conceptual service. So we sort of say, okay, for this particular client, they need a management of change service.

>2. Hide information about the services to the user as much as possible(coupling)

And if you do have awkward relationships between services make sure that's well documented. And if it's possible, **if you have complicated interactions between services make sure that that is understood by the whole team, because that's where your high risk is.** Whenever you have very complicated interactions between parts of a system that's where a lot of your risk of failure is going to be.

---

##  Service principles(Important)

Lecture P.7

----

## Internet history

The relationship between web browser and
web service is a client-server relationship. Both the request and the
response are messages conveyed in HTTP, a communication protocol that
both the web browser and web server understand. 


Static -> Dynaimc->Web Applications


## UML diagram for service oriented achitecture

Lecture p.16

----

## XML, HTML,JSON

- XML: https://www.w3schools.com/xml/default.asp

- HTTP Methods
  - POST: create resources
  - Patch: update resource paritially
  - PUT: replace resources
  - GET: get resources

-------

## Distributed System Basics


Client and Servers ofen operate in heterougenous enviroments.

### Middleware

Middleware is a type of architecture used to facilitate communucation of services avaible and requests for these services between two applications that are operatiing on enviromenttaly different systems.

Network connectivity is an expected mode of operating for mordrn systems, which rarely work in isolation. New software systesm are designed to be able to communitcate with other systems over a network.

Computer networks have enabled the growth of distributed computing.


**Distributed computing** is a system architectue in which comupters on a network are able to communicate and coordinate their actions by passing messages through a network.

Yet, increased specialization runs the risk of impeding communication between client and server.

**AWS API gateway** is an example of distributed computing.


### Example of middleware

### RPC(remote procedure call)
- Client and server don't share the same physical memory.
- Interface Language Defination
- The ensentials of PRC Lecture p.34
  >. Also, you can take a look at [NestJs gPRC](https://docs.nestjs.com/microservices/grpc) to get some practical understanding.
-  synchronous RPCs
  >1. Brings in blocking
- asynchronous PRCs
  >1. Considered non-blocking. Because clients dont need to wait for a server response before moving onto another task, this allows components of a distributed system to work independently.

### Object Brokers

Object brokwers combine the distributed computing aspects of remote procedure calls with object-oriented design principles. By including object oriented programming, object brokers simplify and allow distributed systes to use an object-oriented approch.


