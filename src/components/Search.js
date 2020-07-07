import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
    const [text, setText] = useState("");
    const [results, setResults] = useState([]);
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(
                "https://en.wikipedia.org/w/api.php",
                {
                    params: {
                        action: "query",
                        list: "search",
                        origin: "*",
                        format: "json",
                        srsearch: debouncedText,
                    },
                }
            );

            data.error ? setResults([]) : setResults(data.query.search);
        };

        search();
    }, [debouncedText]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="content">
                    <div className="ui right floated primary button">
                        <a
                            href={`https://en.wikipedia.org?curid=${result.pageid}`}
                            style={{ color: "white" }}
                        >
                            Go
                        </a>
                    </div>
                    <a
                        className="header"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        {result.title}
                    </a>
                    <div className="description">
                        <span
                            dangerouslySetInnerHTML={{ __html: result.snippet }}
                        ></span>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <React.Fragment>
            <div className="ui form">
                <div className="field">
                    <label>Search Wikipedia</label>
                    <input
                        className="input"
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                    />
                </div>
            </div>
            <div className="ui relaxed divided list">{renderedResults}</div>
        </React.Fragment>
    );
};

export default Search;
