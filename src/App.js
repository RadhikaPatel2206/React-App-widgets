import React from "react";
import Header from "./components/Header";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
    {
        title: "What is a dog?",
        text:
            "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
    },
    {
        title: "What kinds of dogs are there?",
        text:
            "There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.",
    },
    {
        title: "How do you acquire a dog?",
        text:
            "Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.",
        text2:
            "A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.",
    },
];

const options = [
    {
        label: "The color Red",
        value: "red",
    },
    {
        label: "The color Blue",
        value: "blue",
    },
    {
        label: "The color Green",
        value: "green",
    },
    {
        label: "The color Yellow",
        value: "yellow",
    },
];

export default () => {
    return (
        <div className="ui container">
            <Header />
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            <Dropdown options={options} />
        </div>
    );
};
