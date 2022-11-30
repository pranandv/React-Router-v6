import Header from "./Header"

//define with simple functional component
function Home() {
    return (
        <div>
            <Header />
            <h1>Hello from <span style={{color:"red"}}>Home</span></h1>
        </div>
    )
}

export default Home