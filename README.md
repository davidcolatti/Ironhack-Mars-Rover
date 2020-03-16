# IronHack-Mars-Rover
This is part of the pre-work that I completed before the Web Development bootcamp.


Learning goals
In this exercise, the goal is to apply as many as possible of the concepts you've just learned:

how to work with different types of variables,
how to manipulate nested data structures,
how to define and invoke functions.
Introduction
We are sending a rover to Mars, and we need to be able to move it through a series of instructions sent from the Earth. As the final exercise for this part of the module, you will be leading this project.



Getting started and submission
Open a new CodePen and when ready, send the link to the TA via Slack or email. Don't wait until you're entirely done, any time you're stuck reach out in code-help Slack channel to members of the Ironhack community, to your peers in your cohorts' Slack channel and then if you didn't get needed help, to your TAs.

Paste this code as your start in the CodePen you just opened:

// Rover Object Goes Here
// ======================




// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}
Basic Information
Our Mars Rover is kind of dumb. By that, we mean it can't move and turn at the same time. This means that if the rover wants to move to the left, its first move must be a turn. Its next move will then be a step forward.

We will discuss this concept in more detail as we progress through the exercise.

Also, our rover is on a test mission. NASA has placed the rover on a 10x10 grid to make sure all is well before we ship it off to Mars.

At a high level, what we will do in the exercise is the following:

create a function to turn the rover,
create a function to move the rover forward or backward based on its direction,
create a function to receive a list of commands and move based off of those commands.
Does this sound familiar to you? Haven't we just done something similar in our Final exercise?

Let's go!

Iteration 1 | The Rover Object
Create an object to represent the rover. This object will have only one property for now: the direction.

The direction property can contain one of four values: "N", "S", "E", or "W". The rover's default direction will be "N" (as North).

Iteration 2 | Turning the Rover
The rover has a direction attribute. We've already provided functions named turnLeft() and turnRight(). Each function receives a rover object as an argument. Your job is to turn the rover in the appropriate direction based off of its current direction.

Examples:

Rover is facing North and turns left => Rover is now facing West

Rover is facing West and turns left => Rover is now facing South

Rover is facing North and turns right => Rover is now facing East.



Suggested Approach
Begin with a switch statement. Based off of which function is being called, turn the rover in the correct direction based off of its current direction.

Test these functions putting console logs in them which will tell you which direction is rover facing and check the output in the console of the CodePen.

Iteration 3 | Moving the Rover
The rover's position
To move the rover around, we have to keep track of the rover's position.

Positions can be represented as a pair of coordinates, x and y. Add two properties to your rover called x and y. Their default values will both be set to 0.

Again, is this familiar to you?



Moving Forward
Once the rover has a position, it's time to move it.



moveForward() is a function of the rover's current direction, and the movement forward.

For instance, if the rover is facing west and moves forward, we would decrease the rover's x by 1.

If the rover is facing north and moves forward, we would decrease the rover's y by 1.

If the rover is facing south and moves forward, we would increase the y by 1.

Fill in this logic in the moveForward() function. After each movement, console.log the rover's coordinates so you can see where it's positioned.

Iteration 4 | Commands
Create a function that receives a list of commands. These commands will be the first letter of either (f)orward, (r)ight, or (l)eft.

To test it, use the string: ‘rffrfflfrff’.
