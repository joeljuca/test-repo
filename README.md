> [!IMPORTANT]  
> Before starting, create a public GitHub/GitLab repository and share the link with the interviewer.

> [!TIP]  
> If you'd like to use this project as a template instead of setting up yours from scratch:
> - Create a public GitHub/GitLab repository
>   - Copy the clone URL (example: git@github.com:CoinBR/tmp.git) 
> - Clone this repository (the challenge)
>   - Navigate to its folder in the terminal
>   - Run this command to load the submodules:
>     - `git submodule update --init --recursive --remote`
>   - Run this command with your repository URL: 
>     - `submodules/clone_and_claim/run.sh ___YOUR_REPOSITORY_URL___`


## Code Challenge for Full Stack Engineer (Job 7792)

Build a fullstack app for managing salon appointments. 
This challenge evaluates your proficiency in both frontend and backend development, focusing on GraphQL, PostgreSQL, React, and TypeScript.

 
### Backend 
 
GraphQL API: Implement a GraphQL API that supports the following operations: 
 - [ ] Query: Fetch all appointments with their associated salon and service details
 - [ ] Mutation: Add a new appointment
 - [ ] Mutation: Update an existing appointment's details
 - [ ] Mutation: Delete an appointment
 
PostgreSQL Database: Use PostgreSQL to store the appointment data.
The db should include these tables:
 - [ ] salons with fields: id, name, location.
 - [ ] services with fields: id, salon_id, name, price.
 - [ ] appointments with fields: id, salonId, customerName, serviceName, appointmentTime.
 
Environment: 
   Use any Node.js framework (e.g., Express, Nest) to set up your GraphQL server.
 
### Frontend
 
Develop a simple **React** frontend that interacts with the GraphQL API.


Requirements:
 - [ ] Use **Apollo Client** to interact with the GraphQL API.
 - [ ]  Style the app minimally using plain CSS or a library like TailwindCSS, Material-UI or bootstrap.
 
Features:
 - [ ] View Appointments: Display a list of all appointments fetched from the backend.
 - [ ] Add Appointment: Provide a form to create a new appointment with these fields:
   - Customer Name
   - Salon
   - Service
   - Appointment Time
 
### Constraints 
 
 - [ ] Use clean code practices and adhere to design patterns.
 - [ ] Include a README file with:
   - [ ] Setup instructions.
   - [ ] Brief explanation of your approach.

---

## Running the project
- Run, in the root of the project:
  - `./run.sh`
- Follow the instructions on the script output

