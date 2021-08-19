# Decomposition Strategies


- Topics	

	- Understanding software architecture and why it’s important

	- Decomposing an application into services by applying the decomposition patterns 
	- Decompose by business capability and Decompose by subdomain

	- Using the bounded context concept from domaindriven design (DDD) to untangle data and make decomposition easier

- Key ideas
	- Architcture => the definition of the services
	- Services are organized around business concerns rather than techinical concerns  => Idea pf DDD

- Goal of architecture
	- Scalability, reliabilty, secrurity(traditional)
	- rapid and safe delivery of software(nowdays)
	- Maintainaibility, testability, deployability(microservice architecture)
- The enssence is that an application's architecture is its decomposition into parts(the elements) and the relationships(the relations) between thoes parts.
	- The 4+1 view model of software acrhitecture
		- Logic view - The software elements that are created by developers
		- Implementation view - The output of the build system. The view contains
			-  modules
			- components
		- Process view: the components at run time
			- Each element is a process
			- The components at runtime. Each element is a process, and the relations between processes represent interprocess communication.
		- Deployment view: how the processes are mapped to machines

- Why architecture matters
	- functional requirements ( in the form of use cases or user stories)
	- its quality of service requirements(quality attributes)
		- scalibility
		- maintaibility
		- testablility
		- reliability
		- deployability
- Overview of architectural styles
	- layered architecture: organizes software elements into layers.
		- how
			- presentation
			- business logic
			- persitance 
       - drawbacks
	       - Single presentation layer—It doesn’t represent the fact that an application is likely to be invoked by more than just a single system.
		   - Single persistence layer—It doesn’t represent the fact that an application is likely to interact with more than just a single database.
			- Defines the business logic layer as depending on the persistence layer—In theory, this dependency prevents you from testing the business logic without the database.

- Hexagonal architecture
	- **How**: 	the hexagonal architecture style organizes the logical view in a way that places the business logic at the center
	- **Features**
		- A key characteristic and benefit of this architecture is **that the business logic doesn’t depend on the adapters. Instead, they depend upon it.**
		- Two types of ports
			- Inbound
			- Outbound
- The microservice architecture is an architectural style
	- it structures the implmentation view as a set of multiple components
	- The components are services
	- the connectors are the communication protocals that enable these services to collaborate
	- The connectors between services are implemented using interprocess communication mechanisms such as REST APIs and asynchronous messaging.
- *business capability*

- **What is service**
	- A service is a standalone, independently deployable software component that implements some useful functionality.
		- Two types of operations
			- commands: createOrder
			- queries: findOrderById
       - A service also publishes events, OrderCreated. Which comsumed by its clients.
