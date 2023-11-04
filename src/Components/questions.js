const questions = [{
    id:1,
    question:'What is the children prop?',
    options:{
        a:'A property that let you set an object as a property',
    c:'A property that let you nest components in other components',
    b:'A property that adds child value to state',
    d:'A property that let you pass data to child coponents '
    },
    answer:'c',
    remove1:"a",
    remove2:"d"
},{
    id:2,
    question:'The lifecycle methods are mainly used for ___.',
    options:{
        a:'keeping track of event history',
    b:'enhancing components',
    c:'freeing up resources',
    d:'none of the above'
    },
    answer:'b',
    remove1:"a",
    remove2:"d"
},{
    id:3,
    question:'Which of the following methods in a React Component should be overridden to stop the component from updating?',
    options:{
        a:'willComponentUpdate',
    b:'shouldComponentUpdate',
    c:'componentDidUpdate',
    d:'componentDidMount'
    },
    answer:'b',
    remove1:"a",
    remove2:"d"
},{
    id:4,
    question:'What is used to pass data to a component from outside?',
    options:{
        a:'setState',
    b:'render with arguments',
    c:'PropTypes',
    d:'props'
    },
    answer:'d',
    remove1:"c",
    remove2:"b"
},{
    id:5,
    question:'Which of the following methods in a React Component is called after the component is rendered for the first time?',
    options:{
                a:'componentDidUpdate',
                b:'componentDidMount',
                c:'componentMounted',
                d:'componentUpdated'
    },
    answer:'b',
    remove1:"a",
    remove2:"d"
},{
    id:6,
    question:'How do you write an inline style which specifies the font-size:12px and color:red; in JSX?',
    options:{
        b:`style={{font-size:12,color:'red'}}`,
    a:`style={{fontSize:'12px',color:'red'}}`,
    c:`style={fontSize:'12px',color:'red'}`,
    d:`style={{font-size:12px,color:'red'}}`
    },
    answer:'a',
    remove1:"b",
    remove2:"c"
},{
    id:7,
    question:'What advantages does ReactJS have?',
    options:{
        a:'Increases the application’s performance with Virtual DOM',
    b:'JSX makes a code that is easy to read and write',
    c:'It renders both on client and server side',
    d:'All of the above'
    },
    answer:'d',
    remove1:"b",
    remove2:"c"
},{
    id:8,
    question:'What is state in React?',
    options:{
        a:'An internal data store (object) of a component.',
    b:'A persistant storage.',
    c:'to pass data to components',
    d:'comunication channel between child and parent'
    },
    answer:'a',
    remove1:"c",
    remove2:"b"
},{
    id:9,
    question:'What are the two ways that data gets handled in React?',
    options:{
        a:'state & props',
    b:'services & components',
    c:'variables and arguments',
    d:'callback & attribuets'
    },
    answer:'a',
    remove1:"c",
    remove2:"b"
},{
    id:10,
    question:'What disadvantages does ReactJS have?',
    options:{
        a:'It is only a view layer. You have to plug your code for Ajax requests, events and so on.',
    b:'The library is pretty large',
    c:'The learning curve can be slow.',
    d:'All of the above options'
    },
    answer:'d',
    remove1:"b",
    remove2:"c"
},{
    id:11,
    question:'Choose the right answer about JSX.',
    options:{
        a:'JSX is faster as it performs optimization while compiling code to JavaScript',
    b:'JSX is a syntax notation for JavaScript XML',
    c:'JSX provides expressiveness of JavaScript along with HTML, like template syntax',
    d:'All of the above options'
    },
    answer:'d',
    remove1:"b",
    remove2:"c"
},{
    id:12,
    question:'The arbitrary inputs of components are called ___.',
    options:{
        a:'Props',
    b:'Keys',
    c:'Elements',
    d:'Ref'
    },
    answer:'a',
    remove1:"c",
    remove2:"b"
},{
    id:13,
    question:'Which method is not part of ReactDOM?',
    options:{
        a:'ReactDOM.destroy()',
    b:'ReactDOM.hydrate()',
    c:'ReactDOM.createPortal()',
    d:'ReactDOM.findDOMNode()'
    },
    answer:'a',
    remove1:"c",
    remove2:"b"
},{
    id:14,
    question:'What is Babel?',
    options:{
        a:'JavaScript compailer',
    b:'JavaScript interpreter',
    c:'JavaScript transpiler',
    d:'None of the above'
    },
    answer:'c',
    remove1:"a",
    remove2:"d"
},{
    id:15,
    question:'How many elements can a valid react component return?',
    options:{
        a:'2',
    b:'3',
    c:'1',
    d:'4'
    },
    answer:'c',
    remove1:"a",
    remove2:"d"
}]
export default questions