# Project Overview


## Avengers Assemble - Marvel Comics Superhero Database

http://avengers-assemble-app.netlify.app

## Project Description

Avengers Assemble is a React build that uses an API from Marvel Comics and an Airtable to allow for the sorting of characters. The user is able to navigate from a homepage to the database, to a seperate page where they can create their own Avengers team, and a section where they can create their own superhero and add it to the team. The user will be able to search through a database of superheros in which they can access more information about the superhero (i.e. thier superpowers, origin, short description and the comics they are in). The user will be allowed to select from the database to create thier own team in an interactive menu. The user will be able to complete a form and make their own custom superhero. The user will be allowed to delete any created superheros and delete any created teams.


## Wireframes
![image](https://user-images.githubusercontent.com/82814499/117490980-94d84780-af3d-11eb-9ab4-4e8971bd6dd8.png)


## Component Hierarchy
![image](https://user-images.githubusercontent.com/82814499/117472065-80d51b80-af26-11eb-87ff-4b137ccdc191.png)

## API and Data Sample

``` javascript
{
    "records": [
        {
            "id": "recMF9Y0P0GaHshxu",
            "fields": {
                "origin": "Long Island, NY",
                "image": "https://lumiere-a.akamaihd.net/v1/images/avengers-characterpose-ironman_30193360.png?region=0%2C0%2C138%2C280",
                "powers": "Wears modular arc reactor-powered Iron Man armor, granting superhuman strength & durability, the ability to fly & project Repulsor blasts",
                "superhero": "Iron-Man",
                "description": "When billionaire industrialist Tony Stark dons his sophisticated steel-mesh armor, he becomes a living high-tech weapon - the world's greatest fightin..."
            },
            "createdTime": "2021-05-07T18:28:55.000Z"
        },
        {
            "id": "recS32QVBtvUvyIhk",
            "fields": {
                "origin": "Asgard",
                "image": "https://lumiere-a.akamaihd.net/v1/images/avengers-characterpose-thor_6f50eecc.png?region=0%2C0%2C164%2C280",
                "powers": "Superhuman strength, speed, endurance & resistance to injury.",
                "superhero": "Thor",
                "description": "Thor's strength, endurance, and quest for battle are far greater than his Asgardian brethren. The mighty Thor wields an enchanted Uru hammer, Mjolnir,..."
            },
            "createdTime": "2021-05-07T18:28:55.000Z"
        },
        {
            "id": "recyh3IVU0o5S3UtO",
            "fields": {
                "origin": "Brooklyn, NY",
                "image": "https://lumiere-a.akamaihd.net/v1/images/avengers-characterpose-captainamerica_4f97efbc.png?region=0%2C0%2C132%2C280",
                "powers": "Peak physical condition, with heightened strength, endurance & agility",
                "superhero": "Captain America",
                "description": "During WWII, the patriotic Steve Rogers was offered a place in the military's top operation: Rebirth. Injected with an experimental super-serum, Roger..."
            },
            "createdTime": "2021-05-07T18:28:55.000Z"
        }
    ],
    "offset": "recyh3IVU0o5S3UtO"
}
```

### MVP/PostMVP


#### MVP 

- Create homepage with routes to each perspective field
- Use CSS Grid to format the superhero data from Airtable dynamically into organized cards in "Superhero Database" (GET request)
- Use a form to "Create" new superheros to an Airtable (POST & PUT request)
- Use a delete button to "Remove" custom created superhero (DELETE request)

#### PostMVP  

- Use an interactive button to get "More Info" on each superhero
- Add "Create Team" tab in which user can add superheros to a custom team
- Add a "Like" button for the superhero data cards
- Add a "Search" bar to search for a specific superhero
- Post "Comments" under favorite superheros
- Get superhero data from the Marvel API and render to the page


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|May 5-7| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|May 7| Project Approval / Start Componets | Complete
|May 8| Continue components, GET, POST, PUT, DELETE | Complete
|May 9| Finish Components / Test and review JS code | Complete
|May 10| Start CSS styling | Complete
|May 11| Finish CSS / MVP Checkover | Complete
|May 12| MVP Due / Post-MVP / Debugs | Incomplete
|May 14| Presentations | Incomplete


## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Proposal | H | 2hrs| 3.5hrs | hrs |
| Setting up Airtable | H | 1hrs| 2hrs | 2.5hrs |
| Make homepage and create routes | H | 1hrs| .5hrs | .5hrs |
| Create API call (GET) for superhero database | H | 2hrs| 1hrs | 1hrs |
| Create PUT & POST request for create superhero | H | 2hrs | 1hrs | 1hrs |
| Create dynamic form for create superhero | H | 2hrs| 2hrs | 2hrs |
| Create DELTE request for new superhero cards | H | 2hrs| 1hrs | 1hrs |
| Work through beginner CSS | H | 3hrs| 2hrs | 2hrs |
| Work through dynamic CSS | H | 3hrs| 1hrs | 1hrs |
| Work through advanced CSS | H | 3hrs| 5hrs | 5hrs |
| Review MVP | H | 2hrs| 1hrs | 1hrs |
| Post MVP | H | 3hrs| 5hrs | 5hrs |
| Total | H | 26hrs| 25hrs | 25hrs |

## SWOT Analysis

### Strengths:

I have a really good understanding where my application is goign and the steps I need to take to get to the final product. This allows me to better plan my time to allow me to finish my project in a timely orderly manner. I have a good idea of which labs to refernce when completing the JS code.

### Weaknesses:

On weakness I have is to properly get my data to render using JS React. I feel that I can overcome this just by trial along with help from my instructors and peers.

### Opportunities:

This project will help me solidfy my understanding of JS React. I also am a very big comic fan and I wiill defienlty use this app to reference back to for info on my favorite superheros.

### Threats:

The big threat I see is trying to debug my code. Debugging I definelty need to get better at. I also need to work on time management and need to stop distracting myself from my final project.
