# Petful Server

live app: https://petful-client-template-lake.vercel.app/

# Built With
Node
Express
Javascript

# API Documentations

Server BASE URL: https://

`GET /pets`
Returns an object of a cat and a dog each at the head of their queue.

Example request and response structure:

GET http://localhost:8000/pets

response: 200 ok

{
    "cat": {
        "age": 2,
        "breed": "Bengal",
        "description": "Orange bengal cat with black stripes lounging on concrete.",
        "gender": "Female",
        "imageURL": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "name": "Steve French",
        "story": "Thrown on the street"
    },
    "dog": {
        "age": 3,
        "breed": "Golden Retriever",
        "description": "A smiling golden-brown golden retriever listening to music.",
        "gender": "Male",
        "imageURL": "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "name": "Zim",
        "story": "Owner Passed away"
    }
}


`DELETE /pets`
Requires the 'type' of pet in the body to be either 'cat' or 'dog'. Then it deletes the type of pet at the head of the queue and a person from the head of the queue. This handles of deleting of people and pets from the queue.

Example request and response structure:

DELETE: http://localhost:8000/pets

response: 200 ok


`GET /people/people_list`
Returns an array of names in the waiting queue.

Example request and response structure:

GET: http://localhost:8000/people/people_list

response 200 ok

[
    "Randy",
    "Annie",
    "Grace",
    "Trevor",
    "Jim"
]

`POST /people`
Adds a person to the wait list. This requires the users name to be sent in the body in this format: "person": "userName"

Example request and response structure:

POST: http://localhost:8000/people/

response 200 ok



