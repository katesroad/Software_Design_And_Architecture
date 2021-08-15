# Escaping monolithic hell


## The symptons of monolithic hell 

and how to escape it by adopting the microservice architecture


- Monolithic architecture worked well initially
- FTGO
	- Hexagonal architecture
	- Surrounding are adapters
	- Core are business logic
- Business Logic
	- consits of modules
	- Parked with a single War file
- Pros and cons of monolithic
	- pros
		- simple to develop
		- easy to make radical changes to the application
		- straightforward to test/deploy
		- easy to scale
  - cons
	  - Over time, development, testing, deployment, and scaling became much more difficult

- living in monothic hell
	- **team grow, codebase grow, manangement overhead increased**
	- Why
		- Complex: it is too large for any developer to fully understand
		- downward spiral
		- large
			- slow to test
				- The codebase is huge and complex and the impact of a change isn't well understood, developers and CI server must run the entire test suite
			- slow to understand
			- slow to startup the application, IDE frozen
			- slow to the whole workflow
		- state of the art
			- Software-as-Service application is **continuos development**
- Conlusion
	- developing a reliavle monolith is a challenging task
		- CI
		- Testing, deployment, development, module compromise
		- Team cooperation and management
  - Growing consensus is that if you're building a large, complex application, you should consider using the microservice architecture

## Scale Cube and microservice

- The art of scalability
	- **x axis**  Load balancer requests across multple instances
	- **z axis**:  scalling runs multiple identical instances of the monolithic application behinds  the routes which routes based on a request attribute. Each  instance is responsible for a subste of data
	- **y axis** scaliing spliting the application into a set of services. Each service is reponsible for a particular function. A service is scaled using x-axis scaling and, possibly, z-axis scaling.

- Microservices as a form of modularity
	- Use services as the unit of modularity, A service has an API, which is an impermeable boundary that is difficult to violate.
	- Each microservice has its own database
	- communicate using API
	- Many services correspond to the modules described earlier in this chapter. What’s different is that each service and its API are very clearly defined.
	- **A service is a mini application that implements narrowly focused functionality. What matters is that each service has a focused, cohesive set of responsibilities**
	
