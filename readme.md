#GoCo Calculator Coding Challenge

You'll be building a simple react component: a calculator. It will look like the native calculator on an iOS or OSX.

<img src="https://cloud.githubusercontent.com/assets/289053/19524827/a3c1ab8c-95e4-11e6-9acc-a458b2ebd642.png" style="max-width:100%;width:400px;" />

As a starting point, this repo already has webpack, babel, react, redux and sass setup so you can focus on the app and not the tooling (though you're welcome to modify it as you see fit).

Javascript files are under `app/js`. SASS files are under `app/stylesheets`.

##Design & behavior
- Using SASS (or CSS), make the design match the image (Ignoring the phone specific stuff at the top)
- As you enter a number, it should show up in the output at the top
- When you hit an operator (+, -, etc), that button should have an active state
- When you type in the next number, it should show up in the output
- When you hit equal or some other operator, the previous operation should be run on the numbers given.

##Colors & measurements
- You can make the calculator any size you want, but all the text should match the size
- Text color (unless specified below): `#000`
- Output box
  - background: `#000`
  - text color: `#fff`
- Operator buttons
  - All should be perfectly square
  - background color: `#F78F12`
  - text color: `#fff`
- Misc buttons (C, +/-, %)
  - All should be perfectly square
  - background color: `#C9CACC`
- Number buttons:
  - All should be perfectly square, except the `0`, which should be a rectangle
  - background color: `#D6D7D9`

## Instructions
- This is going to be a react component. You have free reign on how you deal with the calculations, but at a minimum, it should be able to add, subtract, and equal
- Browser compatibility can be with the latest Chrome
- Break it down into as many subcomponents as you feel necessary

##Running the app
- `npm run start`
- open http://localhost:8080
