const App = () => {
    const part = [
        {name:'Fundamentals of React', number: 10},
        {name:'Using props to pass data', number: 7},
        {name:'State of a component', number: 14},
    ]
    const course = 'Half Stack application development'

    const Header = () => {
        return (
            <div>
                <h1>{course}</h1>
            </div>
        )
    }
    const Part = (props) => {
        return (
            <div>
                <p>{props.name} {props.number}</p>
            </div>
        )
    }
    const Total = () => {
        return (
            <div>
                <p>Number of exercises: {part[0].number + part[1].number + part[2].number}</p>
            </div>
        )
    }
    return (
        <div>
            <Header course={course} />
            <Part name={part[0].name} number={part[0].number}/>
            <Part name={part[1].name} number={part[1].number}/>
            <Part name={part[2].name} number={part[2].number}/>
            <Total />
        </div>
    )
}

export default App