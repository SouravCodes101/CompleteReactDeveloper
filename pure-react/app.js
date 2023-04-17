const Person = props => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('p', {}, props.occupation)
  ])
}

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {class: 'title'}, "React is rendered"),
    React.createElement(Person , {name: 'Sourav', occupation: 'Software Engineer'}, null),
    React.createElement(Person , {name: 'Sandipan', occupation: 'Senior Product Manager'}, null),
    React.createElement(Person , {name: 'Keshov', occupation: 'Senior Software Engineer'}, null),
  
  ]);
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));