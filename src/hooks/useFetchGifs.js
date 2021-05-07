import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    /**
     * Execute the code of conditional way
     * useEffect cannot be synchronous
     */
    useEffect(() => {
        // Execute the instruction when the component is rendered for the first time
        getGifs( category ).then( imgs => {
            setstate({
                data: imgs,
                loading: false
            })
        } );
    }, [ category ])

    return state; // { data: [], loading: true }
}