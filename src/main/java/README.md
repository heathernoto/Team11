https://excalidraw.com/#room=64119709434748f19dc2,_kGEjBID34rPpB80FAHgKg

# Add a Business
curl -X POST localhost:8080/api/businesses -d "{\"businessName\": \"TestBusiness\", \"streetNumber\": \"6\", \"streetName\": \"Magic Street\", \"city\": \"New York\", \"state\": \"NY\", \"rampPresent\": \"true\", \"doorWidthAccessible\": \"true\", \"stepsOnEntry\": \"false\", \"restroomAccessible\": \"true\"}" -H "Content-Type:application/json"

# Add a user
curl -X POST localhost:8080/api/users -d "{\"userEmail\": \"test2@mail.com\", \"userName\": \"Liz\", \"allyPoints\": \"3\"}" -H "Content-Type:application/json"

# List links in the application
curl localhost:8080/api

# Request by business name
http://localhost:8080/business-name?&name=TestBusiness

# Sample output for requests by name
## It is returned as a json array string The below result shows a query response with multiple hits. It will be an array even if there is only one db hit for a given name
[{ "businessName" : "Bills Car Wash", "streetNumber" : 1010, "streetName" : "Billiams St", "city" : "Columbus", "state" : "OH", "rampPresent" : true, "doorWidthAccessible" : false, "stepsOnEntry" : true, "restroomAccessible" : false }, { "businessName" : "Bills Car Wash", "streetNumber" : 2000, "streetName" : "Williams", "city" : "Smyrna", "state" : "DE", "rampPresent" : false, "doorWidthAccessible" : false, "stepsOnEntry" : true, "restroomAccessible" : false }]