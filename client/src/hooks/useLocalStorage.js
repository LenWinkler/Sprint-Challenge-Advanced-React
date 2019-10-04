import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    
    const [storedPlayer, setStoredPlayer] = useState(() => {
        const player = window.localStorage.getItem(key);
        if (player) {
            return JSON.parse(player)
        } else {
            return initialValue
        }
    });

    const setPlayer = player => {
        setStoredPlayer(player);
        window.localStorage.setItem(key, JSON.stringify(player))
    };

    return [storedPlayer, setPlayer]
}

export default useLocalStorage;