import Header from "./Header"

//define function with arrow function
const About = () => {
    return (
        <>
            <Header />
            <h1>Hello from <span style={{color:"green"}}>About</span></h1>
        </>
    )
}

export default About