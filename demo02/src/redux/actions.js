import {CHANGEINPUT,ADDITEMS } from './action-types'



export const inputChange = (e)=>({
    type:CHANGEINPUT,
    value:e.target.value
})

export const clickButton = ()=>({
    type:ADDITEMS
})


