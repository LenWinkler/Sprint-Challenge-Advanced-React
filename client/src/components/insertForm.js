import React from "react";
import useInput from "../hooks/useInput";

const AddPlayerToStorage = () => {
    const [player, setPlayer, handlePlayer] = useInput();

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <>
        <form data-testid="submit-form" onSubmit={handleSubmit}> 
            <input type="text" name ="player" label="player" value={player} onChange={handlePlayer} placeholder="player's name" />
            <button type="submit">Add Player To Local Storage</button>
        </form>
        </>
    )


}

export default AddPlayerToStorage;