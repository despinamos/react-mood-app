import {Frown, Laugh, Meh, Smile} from "lucide-react";
import type{MoodFormProps} from "../types.ts";

const MoodForm = ({dispatch}: MoodFormProps) => {
   // const [mood, setMood] = useState("");

    const submitMood = (mood: string) => {
        dispatch({type: "ADD", payload: mood});
        if(mood === "happy") {
            console.log(mood +" :D");
        }
        if(mood === "relaced") {
            console.log(mood +" :)");
        }
        if(mood === "bored") {
            console.log(mood +" :/");
        }
        if(mood === "sad") {
            console.log(mood +" :(");
        }
    }

    return (
        <>
            <div className="flex justify-around items-center py-4">
                <div className="flex gap-4">
                    <button
                        onClick={() => submitMood("happy")}
                        className="border-2 border-green-500 bg-green-500 rounded-md py-2 px-2"
                    >
                        <Laugh />
                    </button>
                    <button
                        onClick={() => submitMood("relaxed")}
                        className="border-2 border-yellow-300 bg-yellow-300 rounded-md py-2 px-2"
                    >
                        <Smile />
                    </button>
                    <button
                        onClick={() => submitMood("bored")}
                        className="border-2 border-orange-500 bg-orange-500 rounded-md py-2 px-2"
                    >
                        <Meh />
                    </button>
                    <button
                        onClick={() => submitMood("sad")}
                        className="border-2 border-red-600 bg-red-600 rounded-md py-2 px-2">
                        <Frown />
                    </button>
                </div>
            </div>
        </>
    )
}
export default MoodForm;