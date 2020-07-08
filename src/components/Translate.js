import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: "Afrikaans",
        value: "af",
    },
    {
        label: "Arabic",
        value: "ar",
    },
    {
        label: "Hindi",
        value: "hi",
    },
    {
        label: "Dutch",
        value: "nl",
    },
];

const Translate = () => {
    const [text, setText] = useState("");
    const [language, setLanguage] = useState(options[0]);

    return (
        <div className="ui form">
            <div className="field" style={{ marginBottom: "50px" }}>
                <label>Enter English</label>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />
            </div>
            <Dropdown
                label="Select Language"
                selected={language}
                options={options}
                onSelectChange={setLanguage}
            />
            <hr style={{ marginTop: "50px" }} />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    );
};

export default Translate;
