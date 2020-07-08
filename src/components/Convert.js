import React, { useState, useEffect } from "react";
import axios from "axios";

const KEY = "";

const Convert = ({ text, language }) => {
    const [translated, setTranslated] = useState("");
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post(
                "https://translation.googleapis.com/language/translate/v2",
                {},
                {
                    params: {
                        source: "en",
                        format: "text",
                        q: debouncedText,
                        target: language.value,
                        key: KEY,
                    },
                }
            );

            setTranslated(data.data.translations[0].translatedText);
        };

        doTranslation();
    }, [language, debouncedText]);

    return (
        <div>
            <div className="ui">{translated}</div>
        </div>
    );
};

export default Convert;
