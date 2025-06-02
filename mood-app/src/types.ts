import type {Dispatch} from "react";

export type MoodProps = {
    id: number;
    text: string;
    background: string;
}

export type Action =
    | {type: "ADD"; payload: string}
    | {type: "DELETE"; payload: number}

export type MoodFormProps = {
    dispatch: Dispatch<Action>;
}

type Mood = {
    id: number;
    text: string;
    background: string;
}

export type MoodListProps = {
    moods: Mood[];
    dispatch: Dispatch<{type: "DELETE"; payload: number}>;
}
