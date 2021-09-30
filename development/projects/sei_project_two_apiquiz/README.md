# GA Project Two - Movie Quiz 
---
## Table of Contents
- Project Overview
- The Brief
- Technologies Used
- Code Installation
- Project Timeline
- Challenges
- Wins
- Future Improvements
- Key Learnings

## Project Overview

This 2-day sprint-project was my first chance to work with a partner on a project as well as my first experience of using a public API and building a frontend in React. Vanessa and I found a great public API to use and we pair-coded a simple but effective Movie Quiz.

Be warned, even the most ardant film buffs out there are going to find some of these questions difficult. Good luck!

You can view the deployed project [HERE](https://bit.ly/3l23Mbx).

### Project Partner

- Vanessa Swanson - [https://github.com/VanessaSwanson](https://github.com/VanessaSwanson)

<p align="center">
  <img src="https://res.cloudinary.com/dn11uqgux/image/upload/v1633013022/project-setup-test/p2_whsmnx.png" />
</p>

## The Brief

- Consume a public API.
- Have several components.
- The app can have a router with several "pages".
- Include wireframes for the design of the app.
- Be deployed online and accessible to the public.

## Technologies Used

### Frontend

- React
- JSX
- Axios
- Bulma
- SCSS
- React Router Dom

### Dev Tools

- Visual Studio Code (with Live Share)
- npm
- Insomnia
- Git
- Github
- Firefox Developer Edition
- Excalidraw (Wireframing)

### API 

- Trivia API - [trivia.willfry.co.uk](trivia.willfry.co.uk)

## Code Installation

- Install dependencies using npm in the CLI with command: `npm i`
- Start development server with CLI command: `npm run dev`

## Project Timeline

### Day 1 - Finding an API, Planning & Initial Functionality

The first major milestone we had to pass before getting started on anything else was finding a suitable API. Although there are thousands freely available to use finding one that worked well and interested us was not such a quick task. We eventually landed on a trivia API which seemed quite promising, however much documentation for it and the responses we were receiving were inconsistently formatted and had numerous spelling errors. To save time on reformatting and vetting each question we decided to ditch it after a few hours. This was a short-term setback but benefitted us in the long-run as we came across the API we ended up using for the project, and this was far better to work with. 

Having settled on the API and tested its responses using Insomnia, we felt confident we could come up with a plan so built out a wireframe (see image below) in Excalidraw for all the pages and components on the site. At this point we thought about dividing up the workload into components that each of us could go off and work on separately but as we went on we found it so helpful to learn from each other in the then very new to us topic of React that we ended up pair-coding almost the whole thing together.

<p align="center">
  <img src="https://res.cloudinary.com/dn11uqgux/image/upload/v1633014162/project-setup-test/Screenshot_2021-09-29_at_19.43.20_mz9iu2.png" />
</p>

The Trivia API had many different categories to choose from but as we both love films we settled on the Movie category. We played with the idea of making a single request for 10 questions from the API at the start of the quiz which we would then store in an array but I felt that was an unnecessary extra bit of code to write when we were under such a time constraint. 

The next logical step was to work out a method for checking the inputted answer against the correct answer from the data. We chose to make this an onChange event to ensure the submit process was really slick. The logic itself behind the checkAnswer function was straightforward, we had to just be mindful of formatting both answers to lowercase (see code below).

```javascript
function checkAnswer (e) {
   e.preventDefault()
   if (e.target.value.toLowerCase() === correctAnswer.toLowerCase()) {
     setAnswerIsCorrect(true)
     setUserAnswer(e.target.value)
   } else {
     setAnswerIsCorrect(false)
     setUserAnswer(e.target.value)
   }
 }
```

### Day 2 - Clues Toast & Bringing It Together 

Overnight I had put together a Header and Footer and the Landing Page, whilst Vanessa had laid out the basics for the Question Card as well as the Game Over Page which was all pretty straightforward as we leaned into Bulma’s framework pretty hard. 

We were then able to concentrate on the main logic of the Question Card and how the Clues would work. This was a really interesting part of the project as some of the ways of using and transferring state between components was not known to me. I spent a couple of hours researching this to get around a particular blocker on this subject which I speak about more in the ‘Challenges’ section. 

Once we had overcome the issue with the transfer of state we cracked on with bringing the project together with nice touches like a Scoring system and a limited number of Clues. These were fun to make and it was cool to use inline JSX logic to change the styling of an element (see code below). 

```javascript
<div className="level-item">
  <p className="score subtitle is-4">Score:<span className={score < 0 && 'low'}>{score}</span></p>
</div>
<div className="level-item">
  <p className="lives subtitle is-4">Clues left:<span className={cluesLeft === 0 && 'low'}> {cluesLeft}</span></p>
</div>

```

At this point we took the opportunity to go back over our code and tidy some bits up as well as doing several run throughs to make sure the project was completely ready for deployment through Netlify.

## Challenges

- Understanding the transfer of state between components. In particular, knowing how to pass state between sibling components was a big blocker on this project. It was a great moment when we found out it could be passed when the state is declared in a shared parent component.
- Allowing time for the responses to be set in state was a big lesson as well as we could see the data on our console logs but the site was crashing when we tried to show that on the page. Using logic for loading components allowed for any slow responses from the API to be mitigated for. 

## Wins

- Little touches like the array of clue responses were fun to make and added a lot to the completeness of the game at relatively little cost (see code below).

```javascript
const clues = [
   `You could try writing ${incorrectAnswer} but you'd be wrong`,
   `One of these is the correct answer: ${incorrectAnswer}; ${correctAnswer}`,
   `The following is an anagram of the correct answer: ${correctAnswer.split('').sort().join('')}`
 ]
```

- Achieving a polished look (on the whole) by making the most of a simple and easy to use CSS framework like Bulma. In particular, things like the Clue toast with a close button are really nice touches that didn’t require extra logic to be coded into our script. 
- I experimented with bundling up a number of our state declarations into an object that could be sent down to a child component without having any prior knowledge of if it could be done and it worked! It was very satisfying to have an idea based on Vanilla JS and be able to combine it with React.

## Future Improvements

- Turn it into a pub quiz and have numerous rounds with differing topics. 
- Make some questions multiple-choice and implement a time-limit.
- Cut down on the code by trying to reuse some of the useStates as there are some that do virtually the same things on particular functions.
- Have been a bit more ambitious with the styling, under the time constraint we played it safe and used exclusively off-the-shelf components from Bulma. 
- I would rejig the router so that the Header and Footer need only be written once and placed outside the Switch.

## Key Learnings

This project was a great opportunity to use React for the first time. Although we only scratched the surface with its capabilities, it opens up many more avenues for website development than with plain HTML. In particular, I found manipulating elements to be the best feature of React, and although state has its own intricacies, it is a very powerful tool. It also acted as a good chance to experience a range of public APIs to get an idea for how a well designed response object is much easier to manipulate than a bad one and how incredibly important data quality is.
