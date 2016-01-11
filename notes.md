##Notes

*Stuff to get it working per the user stories:*

1. Main.js component renders the masthead and the active view (Active/Complete/Expired)

2. Splash.js component takes in username and sends you to

2. Active.js component renders the list of active todo's and the form to add new todo

3. Complete.js component renders the list of completed todo's

4. Expired.js component renders the list of todo's not done.

5. Data structure:

	{ 
		data: {
			items: {
				<auto-gen key>: {
					description: "string",
					priority: "string",
					timestamp: epoch,
					uid: "string",
					complete: boolean
				}
			},
			users: {
				<username>: {
					name: "string",
					uid: "string",
					email: "string",
					state: {
						// config stuff: booleans // 
					},
				} 
			}
		}

6. Use moment.js to determine expired, determine completed todos by setting complete: boolean to true.


*Stuff to make the app better*

1. Implement basic Firebase user authentication

2. Implement datastore security and roles 

3. Custom CSS (inline?)

4. Replace ReactFire with [re-base](https://github.com/tylermcginnis/re-base)

