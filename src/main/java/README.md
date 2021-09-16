https://excalidraw.com/#room=64119709434748f19dc2,_kGEjBID34rPpB80FAHgKg

# Add a Business
curl -X POST localhost:8080/api/businesses -d "{\"businessName\": \"TestBusiness\", \"streetNumber\": \"6\", \"streetName\": \"Magic Street\", \"city\": \"New York\", \"state\": \"NY\", \"rampPresent\": \"true\", \"doorWidthAccessible\": \"true\", \"stepsOnEntry\": \"false\", \"restroomAccessible\": \"true\"}" -H "Content-Type:application/json"

# Add a user
curl -X POST localhost:8080/api/users -d "{\"userEmail\": \"test2@mail.com\", \"userName\": \"Liz\", \"allyPoints\": \"3\"}" -H "Content-Type:application/json"

#List links in the application
curl localhost:8080/api
