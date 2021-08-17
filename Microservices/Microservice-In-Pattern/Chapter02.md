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
