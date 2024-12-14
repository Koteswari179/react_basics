const parent = React.createElement('div',{id:'parent'},[
    React.createElement('div',{id:'child'},[React.createElement('h1',{},'hello react'), React.createElement('h2',{},'hello react is easy'),
    React.createElement('div',{id:'child1'},[React.createElement('h1',{},'h1 tag'),React.createElement('h2',{},'h2 tag')])
    ])
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
