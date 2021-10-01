# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

A stateful component is one that will effect the state within. For example, if we have a handleSubmit function that will set the state of values back to their initial value so that the inputs are clear.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

componentWillMount is called imediatley before mounting occurs. and componenentWillUpdate is called everytime this.setState is called.

3. Define stateful logic.

Stateful logic is any code that uses state.

4. What are the three step of creating a successful test? What is done in each phase?

Arrange, Act, Assert. 

1.Rendering the component,
2.getting the elements, 
3.and then simulating user interaction with those elements.
