“Entry Door Width Over 32 inches”,
“Wheelchair Accessible Tables”,
“Braille Menu”,
“Steps to Enter”,
“Ramp to Enter”,
“Accessible Restrooms”,
“Picture Menu”,
“Elevator”,
“Single Level”,
“Multiple Level”,
“Accessible Drinking Fountain”,
“Accessible Parking”,
“Assistive Listening Devices”,
“Accessible Checkout Lane”,
“Accessible Dressing Rooms”
]

curl -X POST localhost:8080/api/businesses -d "{"businessName": "TestBusiness", "streetNumber": "6", "streetName": "Magic Street", "city": "New York", "state": "NY", "rampPresent": "true", "doorWidthAccessible": "true", "stepsOnEntry": "false", "restroomAccessible": "true"}" -H "Content-Type:application/json"

curl -X POST localhost:8080/api/users -d "{"userEmail": "test2@mail.com", "userName": "Liz", "allyPoints": "3"}" -H "Content-Type:application/json"

/business-name?&name=TestBusiness