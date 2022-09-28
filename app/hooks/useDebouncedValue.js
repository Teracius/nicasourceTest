import React, { useState,useEffect} from 'react'

export const useDebouncedValue = (input,time=500) => {
 
const [debouncedValue, setDebouncedValue] = useState(input);

useEffect(() => {

const timeout = setTimeout(() => {
    setDebouncedValue(input)
}, time);

//aqui se crea una instansia del time out y se limpia la interior
return() => {
    clearTimeout(timeout)
}

}, [input])


return debouncedValue;

}
