import MoodForm from "./MoodForm.tsx";
import MoodList from "./MoodList.tsx";
import {useReducer} from "react";
import type{MoodProps, Action} from "../types.ts";

const moodReducer = (state: MoodProps[], action: Action): MoodProps[] => {
    switch (action.type) {
        case "ADD":
            const newMood: MoodProps = {
                id: Date.now(),
                text: action.payload,
                background: backgroundColor(action.payload)
            }
            return [...state, newMood];
        case "DELETE":
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state;
    }
}

const backgroundColor = (mood: string) => {
    switch(mood) {
        case "happy":
            return "bg-green-500";
        case "relaxed":
            return "bg-yellow-300";
        case "bored":
            return "bg-orange-500";
        case "sad":
            return "bg-red-600";
        default:
            return "bg-gray-100"
    }
}


const MoodApp = () => {

   const [moods, dispatch] = useReducer(moodReducer, []);
   console.log(moods);

    return (
        <>
            <div>
                <h1 className="text-center text-2xl mb-4">Mood App</h1>
                <MoodForm dispatch={dispatch}/>
                <MoodList moods={moods} dispatch={dispatch}/>
            </div>
        </>
    )
}

export default MoodApp;