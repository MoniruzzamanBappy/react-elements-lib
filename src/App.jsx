import { useState } from "react";
import {
  Accordion,
  Alert,
  Avatar,
  Button,
  Card,
  Checkbox,
  Dropdown,
  Radio,
} from "../lib/main";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showAlert, setShowAlert] = useState(true);
  const [checked, setChecked] = useState(false);
  const accordionItems = [
    {
      title: "Section 1",
      content:
        "Storybook comes with a built-in development server featuring everything you need for project development. Depending on your system configuration, running the storybook command will start the local development server, output the address for you, and automatically open the address in a new browser tab where a welcome screen greets you. Storybook comes with a built-in development server featuring everything you need for project development. Depending on your system configuration, running the storybook command will start the local development server, output the address for you, and automatically open the address in a new browser tab where a welcome screen greets you. Storybook comes with a built-in development server featuring everything you need for project development. Depending on your system configuration, running the storybook command will start the local development server, output the address for you, and automatically open the address in a new browser tab where a welcome screen greets you. Storybook comes with a built-in development server featuring everything you need for project development. Depending on your system configuration, running the storybook command will start the local development server, output the address for you, and automatically open the address in a new browser tab where a welcome screen greets you. Storybook comes with a built-in development server featuring everything you need for project development. Depending on your system configuration, running the storybook command will start the local development server, output the address for you, and automatically open the address in a new browser tab where a welcome screen greets you.",
    },
    { title: "Section 2", content: "This is the content for section 2." },
    { title: "Section 3", content: "This is the content for section 3." },
  ];

  const options = [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
    { label: "Option 4", value: 4 },
    { label: "Option 5", value: 5 },
  ];

  const handleSelect = (selectedOption) => {
    console.log("Selected:", selectedOption);
  };

  const [selectedValue, setSelectedValue] = useState("option1");

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className="!flex !flex-col !gap-6 py-12">
      <h1>Count: {count}</h1>
      <div className="flex gap-6 flex-wrap">
        <Button
          label="Primary"
          variant="primary"
          onClick={() => setCount(count + 1)}
        />
        <Button
          disabled
          label="Primary"
          variant="primary"
          onClick={() => setCount(count + 1)}
        />
        <Button label="Secondary" variant="secondary" />
        <Button label="Secondary with custom classes" variant="secondary" />
        <Button label="Tertiary" variant="tertiary" />
        <Button label="Danger" variant="danger" />
        <Button label="Warning" variant="warning" />
        <Button label="Success" variant="success" />
        <Button label="Info" variant="info" />
        <Button label="Light" variant="light" />
        <Button label="Dark" variant="dark" />
        <Button label="Link" variant="link" />
        <Button label="Outline Primary" variant="outline-primary" />
        <Button label="Outline Secondary" variant="outline-secondary" />
        <Button label="Outline Tertiary" variant="outline-tertiary" />
        <Button label="Outline Danger" variant="outline-danger" />
        <Button label="Outline Warning" variant="outline-warning" />
        <Button label="Outline Success" variant="outline-success" />
        <Button label="Outline Info" variant="outline-info" />
        <Button label="Outline Light" variant="outline-light" />
        <Button label="Outline Dark" variant="outline-dark" />
        <Button label="Outline Link" variant="outline-link" />
      </div>
      <div>
        <Accordion items={accordionItems} allowMultipleOpen={true} />
      </div>
      <div style={{ padding: "20px" }}>
        {showAlert && (
          <Alert
            type="success"
            message="This is a success alert!"
            onClose={() => setShowAlert(false)}
          />
        )}
        <Alert type="error" message="This is an error alert!" />
        <Alert type="warning" message="This is a warning alert!" />
        <Alert type="info" message="This is an info alert!" />
      </div>
      <div>
        <div style={{ padding: "20px", display: "flex", gap: "10px" }}>
          {/* Avatar with an image */}
          <Avatar
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            size="lg"
            shape="circle"
          />

          {/* Avatar with fallback text */}
          <Avatar fallbackText="AB" size="md" shape="rounded" />

          {/* Avatar with no image or fallback */}
          <Avatar size="sm" shape="square" />

          {/* Large avatar with fallback */}
          <Avatar fallbackText="XY" size="xl" shape="circle" />
        </div>
      </div>
      <div>
        <div
          style={{
            display: "grid",
            gridGap: "16px",
            padding: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          {/* Card with an image */}
          <Card
            image="https://via.placeholder.com/300x200"
            title="Card Title 1"
            description="This is a description for Card 1."
            footer={
              <button onClick={() => alert("Clicked!")}>Learn More</button>
            }
          />

          {/* Card without an image */}
          <Card
            title="Card Title 2"
            description="This is a description for Card 2. It has no image."
          />

          {/* Card with custom content */}
          <Card>
            <h3>Custom Content Card</h3>
            <p>This card has custom children content.</p>
          </Card>
        </div>
      </div>
      <div></div>
      <div>
        <div style={{ padding: "20px" }}>
          {/* Default Checkbox */}
          <Checkbox
            id="default-checkbox"
            label="Default Checkbox"
            checked={checked}
            onChange={(isChecked) => setChecked(isChecked)}
          />

          {/* Disabled Checkbox */}
          <Checkbox
            id="disabled-checkbox"
            label="Disabled Checkbox"
            checked={false}
            onChange={() => {}}
            disabled
          />
        </div>
      </div>
      <div>
        <div style={{ padding: "20px" }}>
          {/* Basic Dropdown */}
          <Dropdown
            label="Choose an option"
            options={options}
            onSelect={handleSelect}
          />

          {/* Disabled Dropdown */}
          <Dropdown
            label="Disabled Dropdown"
            options={options}
            onSelect={handleSelect}
            disabled
          />
        </div>
      </div>
      <div>
        <h3>Radio Group</h3>
        <Radio
          options={options}
          name="example-radio-group"
          selectedValue={selectedValue}
          onChange={handleRadioChange}
        />
        <p>Selected Value: {selectedValue}</p>

        <h3>Disabled Radio Group</h3>
        <Radio
          options={options}
          name="disabled-radio-group"
          selectedValue={null}
          onChange={() => {}}
          disabled
        />
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default App;
