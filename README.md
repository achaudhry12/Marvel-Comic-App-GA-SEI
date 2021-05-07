# Project Overview


## Project Name

Avengers Assemble - Marvel Comics Superhero Database


## Project Description

Avengers Assemble is a React build that uses an API from Marvel Comics and an Airtable to allow for the sorting of characters. The user is able to navigate from a homepage to the database, to a seperate page where they can create their own Avengers team, and a section where they can create their own superhero and add it to the team. The user will be able to search through a database of superheros in which they can access more information about the superhero (i.e. thier superpowers, origin, short description and the comics they are in). The user will be allowed to select from the database to create thier own team in an interactive menu. The user will be able to complete a form and make their own custom superhero. The user will be allowed to delete any created superheros and delete any created teams.


## Wireframes
![image](https://user-images.githubusercontent.com/82814499/117490980-94d84780-af3d-11eb-9ab4-4e8971bd6dd8.png)


## Component Hierarchy
![image](https://user-images.githubusercontent.com/82814499/117472065-80d51b80-af26-11eb-87ff-4b137ccdc191.png)

## API and Data Sample

Show us a snippet of JSON returned by your Airtable (you can find it under the API documentation) so we know you can access it and get the info you need. This __must__ be properly formatted. An example is below:

```json
{
    "records": [
        {
            "id": "recONRzIUTuZ5lXaF",
            "fields": {
                "author": "Liz Yrineo",
                "setup": "Why did the tomato turn red?",
                "punchline": "Because it saw the salad dressing!"
            },
            "createdTime": "2020-11-30T16:03:09.000Z"
        },
        {
            "id": "rec3oYZ5Tp0AIDsKe",
            "fields": {
                "author": "Rachel Moskowitz",
                "setup": "What did the green grape say to the red grape?",
                "punchline": "Breathe, idiot, breathe!"
            },
            "createdTime": "2020-11-30T16:03:09.000Z"
        },
        {
            "id": "recA34tOaoE1IVeC1",
            "fields": {
                "author": "Gary Grant",
                "setup": "How do you make holy water?",
                "punchline": "You boil the hell out of it!"
            },
            "createdTime": "2020-11-30T16:03:09.000Z"
        }
    ],
    "offset": "recA34tOaoE1IVeC1"
}
```

### MVP/PostMVP


#### MVP 

- Create homepage with routes to each perspective field
- Get superhero data from the Marvel API and render to the page
- Use CSS Grid to format the superhero data into organized cards
- Use an interactive menu to add characters on a custom team using an Airtable
- Use a form to add new superheros to an Airtable
- Delete custom characters and characters from the custom team

#### PostMVP  

- Add a like button for the superhero data cards
- Add a search bar to search for a specific superhero
- Post comments under favorite superheros


## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example.

|  Day | Deliverable | Status
|---|---| ---|
|May 5-7| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|May 7| Project Approval / Start Componets | Incomplete
|May 8| Continue components, GET, POST, PUT, DELETE | Incomplete
|May 9| Finish Components / Test and review JS code | Incomplete
|May 10| Start CSS styling | Incomplete
|May 11| Finish CSS / MVP Checkover | Incomplete
|May 12| MVP Due / Post-MVP / Debugs | Incomplete
|May 14| Presentations | Incomplete


## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all parts of your app.  Your estimates can then be used to evalute possibilities based on time needed and the actual time you have before the app must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add an additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## SWOT Analysis

### Strengths:

### Weaknesses:

### Opportunities:

### Threats:
