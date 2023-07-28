import { useEffect, useMemo, useState } from "react";

function Birthdayemployee(props: any){

   /*  const [qsidob, setQsiDob] = useState<any>([]);
    const [bData, setBData] = useState<any>([]);
    const [currentDate, setcurrentDate] = useState(0);
    const [currentMonth, setcurrentMonth] = useState(0);

    useEffect(() => {
        fetch("https://www.quicksort.us/react/intranet.json")
            .then((response) => response.json())
            .then((data) => setQsiDob(data.DoB))
            .catch((error) => console.error(error))

    }, []);

    useEffect(() => {
        var today = new Date()
        let date = today.getDate();
        setcurrentDate(date);
        let month = today.getMonth() + 1;
        setcurrentMonth(month)
    }, []);

    const imagesprofile = useMemo(() => {
        const filteredEmployees = qsidob.filter((filterEmpId: any) => {
            return filterEmpId.EmpMonth == currentMonth && filterEmpId.EmpDate == currentDate
        })
        const ids = filteredEmployees.map((filteredEmployee: any) => filteredEmployee.EmpId + "_" + filteredEmployee.EmpName)
        return ids

    }, [qsidob, currentMonth, currentDate]) 

    useEffect(() => {
        props.sendBirthData(imagesprofile)
    }, []); */

   
    
    return(
        <>
        </>
    )

}
export  default Birthdayemployee