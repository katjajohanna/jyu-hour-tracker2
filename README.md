# Hour tracker

This is an hour tracker. Users can add, edit and remove hours.

This is Demo 6 for course TIES4560 SOA and Cloud Computing by Jyväskylä university at fall 2019.

The project is running in AWS:
https://48o9szao14.execute-api.eu-central-1.amazonaws.com/dev/

## Usage

1. Run `npm install`
2. Deploy by running `npm run deploy:dev`

## Endpoints
**GET /users**

**GET /hours**

**GET /hours/{id}**

**POST /hours**

Body:
```
{
	"userId": 2,
	"projectId": 2,
	"hours": 5,
	"description": "Bake the cake"
}
```

Return:
- 200 and saved hour, if ok
- 400 if omitting any value from the body

**PUT /hours/{id}**

Body: Any of the values described in POST endpoint

**DELETE /hours/{id}**