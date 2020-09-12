# Frontend Developer Case Study
## Jorge Antonio Ramírez Padilla

### Part 1: Knowledge Questions

- What is server-side rendering, and what problems does it solve?

**Answer:** It's the opposite of client side rendering. On client side rendering, you requested some HTML code to the server, receive it and then interpret it in your browser, the client. This makes websites load slower, and each time a new request is made, the whole website has to be processed by the client. Like asking for a bed and getting all the pieces for you to build. That's not so fun.
Server Side Rendering (SSR) solves this problems. First, the client sends a request to the server. Then, the server pre-renders the website and populates it with the necessary data and sends it to the user. Now, when the user sends another request, only that part of the website is modified, so the requests are smaller, faster, and other non-affected components of the website stay the same, making the experience seamless to the user and lighter to the client. Like ordering a bed, getting it built on your home, and if you'd like to change, let's say, the bed frame, only that part is going to be modified.

- What is the difference between Real DOM and Virtual DOM?

**Answer:** First, what is DOM? DOM stands for *Document Object Model*, which basically is the abstraction tree that defines the order of a website's skeleton, or HTML code, to then be modified if needed by languages such as JavaScript for "the muscle" of the website, and CSS, the "skin" or how it looks. The Virtual DOM is a representation of this DOM. The Real DOM is rendered once. Then, React creates a copy (the Virtual DOM). Then, when the user makes a change to the DOM, the Virtual DOM will receive the whole DOM and look for changes. If a change is detected, it only tells that specific element to change, instead of having to change the whole DOM for that change.

- Compare React to another Frontend framework you have used (e.g. Angular, VueJS, Blaze, Svelte) and create
a table showing the difference between them (based on your perspective and experience). Which one do you
think is better and why?

**Answer:** 

| React | Angular |
| ----- | ----- |
| Uses JSX instead of traditional HTML and JS | Uses traditional HTML and uses TypeScript |
| Uses Virtual DOM | User the Real DOM || It is a JS Library | It is a full-fledge framework |
| It's mobile solution is React Native, which is a full native mobile app. | It's mobile solution is Ionic, which is a "glorified" web app, which has it's limitations on it's own. |
| Component based. So more flexible coding can be done. | Flexible, but still depends on a MVC structure. |
| Bidirectional Data Binding (mutable data) | Unidirectional Data Binding (immutable) |
| Uses Redux for State Management | Uses NgRx or NgJS for State Management |
| Has 6.7k current developers using it. So, it's more popular. | Has 3.2k current developers using it. |
| Fairly easy to learn. Once you've got the basics, you can do a lot of things in less time. | Has a lot of concepts to learn. It's harder to get into, but it still is a great framework once you get used to it. | 

Which one do I prefer? Well, I really like both, but I do prefer React for Web Development. I've used Angular for App Development on Ionic for multiple apps so I'm familiar with that kind of process, but as I mentioned before, for Web Dev, React is my go-to choice.

- Is it recommended to use CSS in JS technique in React?

**Answer:** Not really. It's better to use an external .css file since it's better to have it that way.

- What is the concept of keys in React and what are the conditions to safely use the index as a key?

**Answer:** The keys are the way React can easily now what DOM element has been modified and which one hasn't. They are usually used while rendering an iterable object. It can be a number, a text, but it has to be unique to that specific element.

- How do you pass arguments to an event handler?

**Answer:** 

You can put an onClick event, and bind it to an arrow function to send the event to a certain function, like handleEvent, which receives an id and the event to know what DOM element to modify.

`<button onClick={(e) => this.handleEvent(id, e)}>Handle Event</button>`

- Why fragments are better than container divs? Name at least 2 reasons

**Answer:** 

1. It's faster to load, even if it's not very noticeable, but every help counts.
2. When you inspect the website, the code looks a bit less cluttered. You can "save" divs and DOM nodes.

You can either declare it like this: `<> </>` or `<Fragment> </Fragment>`.

- What is the difference between state and props?

**Answer:** The state is a variable that only exists on the component its declared on. Props, on the other hand, are immutable variables that can be shared between components. Usually, a state becomes a prop, but a prop should't change on its own. That's why the stat is there for.

- What are uncontrolled components? Create an example of a uncontrolled component.

**Answer:** Uncontrolled Components are often used on Forms, so the form is controlled by the DOM instead of the React Component.

`# Frontend Developer Case Study
## Jorge Antonio Ramírez Padilla

### Questions

- What is server-side rendering, and what problems does it solve?

**Answer:** It's the opposite of client side rendering. On client side rendering, you requested some HTML code to the server, receive it and then interpret it in your browser, the client. This makes websites load slower, and each time a new request is made, the whole website has to be processed by the client. Like asking for a bed and getting all the pieces for you to build. That's not so fun.
Server Side Rendering (SSR) solves this problems. First, the client sends a request to the server. Then, the server pre-renders the website and populates it with the necessary data and sends it to the user. Now, when the user sends another request, only that part of the website is modified, so the requests are smaller, faster, and other non-affected components of the website stay the same, making the experience seamless to the user and lighter to the client. Like ordering a bed, getting it built on your home, and if you'd like to change, let's say, the bedframe, only that part is going to be modified.

- What is the difference between Real DOM and Virtual DOM?

**Answer:** First, what is DOM? DOM stands for *Document Object Model*, which basically is the abstraction tree that defines the order of a website's skeleton, or HTML code, to then be modified if needed by languages such as JavaScript for "the muscle" of the website, and CSS, the "skin" or how it looks. The Virtual DOM is a representation of this DOM. The Real DOM is rendered once. Then, React creates a copy (the Virtual DOM). Then, when the user makes a change to the DOM, the Virtual DOM will receive the whole DOM and look for changes. If a change is detected, it only tells that specific element to change, instead of having to change the whole DOM for that change.

- Compare React to another Frontend framework you have used (e.g. Angular, VueJS, Blaze, Svelte) and create
a table showing the difference between them (based on your perspective and experience). Which one do you
think is better and why?

**Answer:** 

| React | Angular |
| ----- | ----- |
| Uses JSX instead of traditional HTML and JS | Uses traditional HTML and uses TypeScript |
| Uses Virtual DOM | User the Real DOM || It is a JS Library | It is a full-fledge framework |
| It's mobile solution is React Native, which is a full native mobile app. | It's mobile solution is Ionic, which is a "glorified" web app, which has it's limitations on it's own. |
| Component based. So more flexible coding can be done. | Flexible, but still depends on a MVC structure. |
| Bidirectional Data Binding (mutable data) | Unidirectional Data Binding (immutable) |
| Uses Redux for State Management | Uses NgRx or NgJS for State Management |
| Has 6.7k current developers using it. So, it's more popular. | Has 3.2k current developers using it. |
| Fairly easy to learn. Once you've got the basics, you can do a lot of things in less time. | Has a lot of concepts to learn. It's harder to get into, but it still is a great framework once you get used to it. | 

Which one do I prefer? Well, I really like both, but I do prefer React for Web Development. I've used Angular for App Develompent on Ionic for multiple apps so I'm familliar with that kind of process, but as I mentioned before, for Web Dev, React is my go-to choice.

- Is it recommended to use CSS in JS technique in React?

**Answer:** Not really. It's better to use an external .css file since it's better to have it that way.

- What is the concept of keys in React and what are the conditions to safely use the index as a key?

**Answer:** The keys are the way React can easily now what DOM element has been modified and which one hasn't. They are usually used while rendering an iterable object. It can be a number, a text, but it has to be unique to that specific element.

- How do you pass arguments to an event handler?

**Answer:** 

You can put an onClick event, and bind it to an arrow function to send the event to a certain function, like handleEvent, which receives an id and the event to know what DOM element to modify.

`<button onClick={(e) => this.handleEvent(id, e)}>Handle Event</button>`

- Why fragments are better than container divs? Name at least 2 reasons

**Answer:** 

1. It's faster to load, even if it's not very noticeable, but every help counts.
2. When you inspect the website, the code looks a bit less cluttered. You can "save" divs and DOM nodes.

You can either declare it like this: `<> </>` or `<Fragment> </Fragment>`.

- What is the difference between state and props?

**Answer:** The state is a variable that only exists on the component it's declared on. Props, on the other hand, are immutable variables that can be shared between components. Usually, a state becomes a prop, but a prop should't change on it's own. That's why the stat is there for.

- What are uncontrolled components? Create an example of a uncontrolled component.

**Answer:** Uncontrolled Components are often used on Forms, so the form is controlled by the DOM instead of the React Component. Below, it's an example of the implementation of an Uncontrolled Component:

```
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

- We want to load dynamically a list of scripts inside the Example component. Update the example with the necessary code to make it work.

### Previous Code

```
import React from 'react';	const scripts = [		"https://example.com/library.js",		"https://example.com/library2.js",		"https://example.com/library3.js"	];	const Example = () => {		return (			<h1>Libraries should be loaded here</h1>		);}
```

**Answer:**

### Solution Code


```
import React from 'react';	const scripts = [		"https://example.com/library.js",		"https://example.com/library2.js",		"https://example.com/library3.js"	];	const Example = () => {		return (
		{
			scripts.map((script) => (
				return(					<h1>{script}</h1>
				)
			))
		}		);}
```

- The following code is a simple App that will display a component based on the route the user acceses. If you verify the initial bundle load you will see the the code loads all 4 components even though the route only Frontend Developer Case Study 2 displays one component. Udpate the code to only load the component that will be used by the Route.

### Previous Code

```
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';import React from 'react';import Example1 from '../example1.js';import Example2 from '../example1.js';import Example3 from '../example1.js';import Example4 from '../example1.js';
// Currently all the components are loaded even if they are not being displayed.const App = () => {	return (		<Router>			<Switch>				<Route path="/example1" component={Example1}/>				<Route path="/example2" component={Example2}/>				<Route path="/example3" component={Example3}/>				<Route path="/example4" component={Example4}/>			</Switch>		</Router>	);
}
```

**Answer:**

### Solution Code

```
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';import React from 'react';import Example1 from '../example1.js';import Example2 from '../example1.js';import Example3 from '../example1.js';import Example4 from '../example1.js';
const App = () => {	return (		<Router>			<Switch>				<Route exact path="/example1" component={Example1}/>				<Route exact path="/example2" component={Example2}/>				<Route exact path="/example3" component={Example3}/>				<Route exact path="/example4" component={Example4}/>			</Switch>		</Router>	);
}
```

- How would you render a component based on the props the main component receives?

### Previous Code

```
import React from 'react';import Example1 from '../example1.js';import Example2 from '../example1.js';import Example3 from '../example1.js';import Example4 from '../example1.js';
const Page = ({ page }) => {	// Add code here}
Page.propTypes = {	page: PropTypes.oneOf(['Example1', 'Example2', 'Example3', 'Example4'])}
```

**Answer:** 

### Solution Code

```
import React from 'react';
import Example1 from '../example1.js';
import Example2 from '../example1.js';
import Example3 from '../example1.js';
import Example4 from '../example1.js';

const Page = ({ page }) => {
	render() {
		if(page === 'Example1') {
			return(<Example1 {...props}/>);
		} else if(page === 'Example2') {
			return(<Example2 {...props}/>);
		} else if(page === 'Example3') {
			return(<Example3 {...props}/>);
		} else if(page === 'Example4') {
			return(<Example4 {...props}/>);
		} else {
			return(<Example1 {...props}/>);
		}
	}
}

Page.propTypes = {
	page: PropTypes.oneOf(['Example1', 'Example2', 'Example3', 'Example4'])
}
```

### Part 2: Creativity & Coding Skills

The code for the To Do app is accessible through the following link:

[JARP To Do App](https://github.com/JARP-96/jarp-todo-app)

And the link to the video explanation is here:

[JARP To Do App Video](https://www.loom.com/share/4843ab8604304dadb8dac17a84daffae)

### Part 3: Interaction

For this part, I have to give advice about the SuperDataScience website, so here is what I've got.

1. When I first enter to superdatascience.com [sds_01.png](sds_01.png), I'm presented to the landing page's presentation section. What I would advice to change is the position of the containers. I feel there is a lot of real state in the blue section. You may want to even have the features list to be bigger. You could either make the blue image smaller (shorter) or center the containers to be at the center of that section.
2. Below, I'm presented to the landing page's "features" section [sds_02.png](sds_02.png). There is too much text on the text container. The title is okay, it has contrast with the regular text. I'd summarize the text to have the least amount of words possible, and also make simple sentences. Also, to separate sentences into paragraphs, to not have a cluster of words.  A good example is in your own website, on this page: [Careers](https://www.superdatascience.com/careers). I do like the list that lets you see different images.
3. Then, when I go to the [For Business](https://grow.superdatascience.com/) page [sds_03.png](sds_03.png), I see that it's another website entirely, under the same domain name. I see that the background image is pixelated. This happens too on the footer image [sds_04.png](sds_04.png), so you might want to check on that.
4. And last but not least, I don't really like that, when you go to another page, the navbar links are not shown anymore. I find it a bit tyring to have to go to the main page to go to another page and the user engagement is very important if you want to have more clients.

The rest of the website I really like. You do good use of call to actions, give multiple opportunities to the user to go to the page that you want them to go (for example, the 'See open positions').


