<!-- the height of Darth Vader -->

GET https://swapi.dev/api/people/4

<!-- the population of the planet Alderaan -->

GET https://swapi.dev/api/planets/2/

<!-- the name of the manufacturer of the Millennium Falcon -->

GET https://swapi.dev/api/starships/?search=Millennium+Falcon

<!-- the name of the species that C-3PO belongs to (multiple URLs) -->

GET https://swapi.dev/api/people/?search=c-3po
GET https://swapi.dev/api/species/2/

<!-- the title of each film that Obi-Wan Kenobi is in (multiple URLs) -->

GET https://swapi.dev/api/people/10/
GET https://swapi.dev/api/films/1/
GET https://swapi.dev/api/films/2/
GET https://swapi.dev/api/films/3/
GET https://swapi.dev/api/films/4/
GET https://swapi.dev/api/films/5/
GET https://swapi.dev/api/films/6/

<!-- use the search query (the how to on the search query is at the bottom of the Getting Started section of the documentation) to get the information about the Millennium Falcon, it’s a starship -->

GET https://swapi.dev/api/starships/?search=Millennium+Falcon

<!-- Check if the POST request accept params, queries, and/or a body. Which one(s) and what information is it expecting to be sent?-->

Accepts a body, expects a JSON object with a text attribute.

<!-- What data type does the GET request return? -->

Returns application/json data.

<!-- What would the URL look like for deleting the post with the id 555? (This post does not exist anymore, but the syntax is the same for existing posts, ) -->

DELETE https://practiceapi.devmountain.com/api/posts/555

<!-- List the possible response codes from the GET request at ‘/posts/filter’ -->

200:
Returns an array of filtered posts or 
409:
Request query is missing required text property.

<!-- Create a post whose text is your name, record the URL and body here: -->

POST https://practiceapi.devmountain.com/api/posts
{
    "text": "Sam Wasden"
}

<!-- What would the URL and body object be to update the post you just made to contain your faovrite color instead of your name? -->

PUT https://practiceapi.devmountain.com/api/posts/?id=6867
{
    "text": "Pantone"
}

<!-- What is the URL to get posts that contain the text “blue”? -->

GET https://practiceapi.devmountain.com/api/posts/filter/?text=blue

<!-- Make a request to GET all the posts. What are the content type and charset of the response? (Hint: look on the Headers) -->

application/json; charset=utf-8

<!-- What would cause a PUT request to return a 409 status? -->

Request was missing req.query.id or req.body.text

<!-- What happens if you try to send a query in the GET request URL? Why do you get that response? -->

You still recieve everything back from posts, the query doesnt affect anything with this api.