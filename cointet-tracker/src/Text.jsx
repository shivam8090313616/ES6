import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import html2pdf from "html2pdf.js"; // Import html2pdf
import "./Test.css"; // Import your custom CSS file

export default function Test(props) {
  const [text, setText] = useState("");
  const [textStyle, setTextStyle] = useState({
    width: "100%",
    maxHeight: "687px",
    minHeight: "687px",
    overflowX: "auto",
    fontSize: "24px",
    textAlign: "left",
    margin: "0",
    padding: "10px",
    background: "#504456",
    color: "white",
    fontWeight: "normal",
    fontStyle: "normal",
    fontFamily: "Arial",
  });
  const fileInputRef = useRef(null);
  const textAreaRef = useRef(null);

  useEffect(() => {
    textAreaRef.current.focus();
  }, []);

  const handleTextTransform = (transformFunc) => {
    const transformedText = transformFunc(text);
    setText(transformedText);
  };

  const handleUpperCase = () => {
    handleTextTransform((text) => text.toUpperCase());
  };

  const handleLowerCase = () => {
    handleTextTransform((text) => text.toLowerCase());
  };

  const handleToggleBold = () => {
    setTextStyle({
      ...textStyle,
      fontWeight: textStyle.fontWeight === "bold" ? "normal" : "bold",
    });
  };

  const handleToggleItalic = () => {
    setTextStyle({
      ...textStyle,
      fontStyle: textStyle.fontStyle === "italic" ? "normal" : "italic",
    });
  };

  const handleFontChange = (selectedFontOption) => {
    setTextStyle({ ...textStyle, fontFamily: selectedFontOption.value });
  };

  const handleAlignLeft = () => {
    setTextStyle({ ...textStyle, textAlign: "left" });
  };

  const handleAlignCenter = () => {
    setTextStyle({ ...textStyle, textAlign: "center" });
  };

  const handleAlignRight = () => {
    setTextStyle({ ...textStyle, textAlign: "right" });
  };

  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result;
        const imageTag = `<img height="400px" width="600px" src="${imageUrl}" alt="Image" />`;
        insertTextAtCursor(imageTag);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "text.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleSaveAsPDF = () => {
    const element = document.getElementById("editor");
    html2pdf().from(element).save();
  };

  const insertTextAtCursor = (textToInsert) => {
    const { selectionStart, selectionEnd } = textAreaRef.current;
    const newText =
      text.substring(0, selectionStart) +
      textToInsert +
      text.substring(selectionEnd);
    setText(newText);
    textAreaRef.current.focus();
    textAreaRef.current.selectionStart = selectionStart + textToInsert.length;
    textAreaRef.current.selectionEnd = selectionStart + textToInsert.length;
  };

  const fontOptions = [
    { value: "Arial", label: "Arial" },
    { value: "Verdana", label: "Verdana" },
    { value: "Times New Roman", label: "Times New Roman" },
    { value: "Courier New", label: "Courier New" },
    { value: "Roboto", label: "Roboto" },
    { value: "Helvetica", label: "Helvetica" },
    { value: "Georgia", label: "Georgia" },
    // Add more font styles as needed
    { value: "Tahoma", label: "Tahoma" },
    { value: "Palatino", label: "Palatino" },
    { value: "Impact", label: "Impact" },
    { value: "Lucida Sans Unicode", label: "Lucida Sans Unicode" },
    { value: "Garamond", label: "Garamond" },
    { value: "Bookman", label: "Bookman" },
    { value: "Trebuchet MS", label: "Trebuchet MS" },
    { value: "Consolas", label: "Consolas" },
    { value: "Century Gothic", label: "Century Gothic" },
    { value: "Franklin Gothic Medium", label: "Franklin Gothic Medium" },
    { value: "Arial Black", label: "Arial Black" },
    { value: "Comic Sans MS", label: "Comic Sans MS" },
  ];

  const header = {
    background: "#504456",
    border: "1px solid white",
  };

  const footer = {
    background: "#504456",
    color: "white",
    border: "1px solid white",
  };

  return (
    <div className="card p-0 m-0">
      <div
        style={header}
        className="card-header d-flex justify-content-between p-1 m-0"
      >
        <h4 className="text-light my-2 ms-5">ListMate</h4>
        <div>
          <ButtonGroup aria-label="Basic button group">
            <Button onClick={handleUpperCase} variant="outline-light fw-bold">
              aA
            </Button>
            <Button onClick={handleLowerCase} variant="outline-light fw-bold">
              Aa
            </Button>
            <Button onClick={handleToggleBold} variant="outline-light">
              <FontAwesomeIcon icon={faBold} />
            </Button>
            <Button onClick={handleToggleItalic} variant="outline-light">
              <FontAwesomeIcon icon={faItalic} />
            </Button>
            <Button onClick={handleAlignLeft} variant="outline-light">
              <FontAwesomeIcon icon={faAlignLeft} />
            </Button>
            <Button onClick={handleAlignCenter} variant="outline-light">
              <FontAwesomeIcon icon={faAlignCenter} />
            </Button>
            <Button onClick={handleAlignRight} variant="outline-light">
              <FontAwesomeIcon icon={faAlignRight} />
            </Button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            <Button onClick={handleImageUpload} variant="outline-light">
              <FontAwesomeIcon icon={faImage} />
            </Button>
            <ButtonGroup>
              <Dropdown>
                <Dropdown.Toggle variant="outline-light " id="dropdown-basic">
                  Select Font
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {fontOptions.map((option) => (
                    <Dropdown.Item
                      key={option.value}
                      onClick={() => handleFontChange(option)}
                    >
                      {option.label}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </ButtonGroup>
          </ButtonGroup>
        </div>

        <ButtonGroup>
          <Button onClick={handleDownload} variant="danger btn-border-light">
            Download
          </Button>
          <Button onClick={handleSaveAsPDF} variant="danger">
            Save as PDF
          </Button>
        </ButtonGroup>
      </div>
      <div className="card-body p-0 m-0">
        <div
          id="editor"
          className="custom-scrollbar"
          style={textStyle}
          contentEditable="true"
          ref={textAreaRef}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
      <div style={footer} className="card-footer d-flex justify-content-center">
        Copyright © 2024 - Content-Editor - All rights reserved.
      </div>
    </div>
  );
}
