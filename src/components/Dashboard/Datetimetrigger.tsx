import { useCallback, useEffect, useMemo, useState } from "react";

function Datetimetrigger(props: any) {
    //const currDate = new Date().toLocaleDateString();
    //const currTime = new Date().toLocaleTimeString();

    const [dateState, setDateState] = useState(new Date());

    useEffect(() => {
       // setInterval(() => setDateState(new Date()), 1000);
       setDateState(new Date());
    }, []);

    useEffect(() => {
        props.sendData(dateState.toLocaleDateString() + " - " + dateState.toLocaleTimeString())
    }, [dateState]);


    return (
        <>

        </>
    )


}
export default Datetimetrigger