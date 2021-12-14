# Gym_DB_Project
Problem Statement: We decided to create a gym database that would help members choose their membership plan and register their workouts. Our ORM implements the member as the user and membership_plan and workout as the domains. 

Solution Statement: The solution was to create a web application that gives members the access to choose and change their membership plan whenever they want. They can also register their workouts under their id and using the workout ids to explicitly show the type of workouts done at the gym

User description: The typical users of this web application would be the members that are signed up for the gym and are registered under a membership plan. These are gym goers who like to keep track of their progress and even the money they spend on the gym. In the future, this can be extended to allow trainers to have access and register new clients (members) under their names. 

Domain objects description: The two domain objects implemented in our solution are the membership_plan and workout. The membership_plan domain represents the type of membership, the cost and description. It has a one to many relationship with the members where multiple members can have one membership plan. The workout domain represents the workouts accomplished, the workout type and its description and states which members completed the specific workout. Workouts have a one to many relationship with the members as a member can have registered multiple workouts. 
