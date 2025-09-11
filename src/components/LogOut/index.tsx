'use client'

type LogOutProp = {
    click:() => void
}

const LogOut = ({click}:LogOutProp) => {

    return (
        <>
            <button onClick={click}>Logout</button>
            
        </>
    )
}

export default LogOut