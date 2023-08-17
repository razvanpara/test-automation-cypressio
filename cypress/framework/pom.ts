import _ = require("cypress/types/lodash");


export class Pom {
    public static URL: string = "https://seleniumbase.io/demo_page";
    //elements
    public static TextInput: string = "#myTextInput";
    public static TextAreaInput: string = "*[name=textareaName]";
    public static SelectDropdown: string = "#mySelect";
    public static MetterBar: string = "#meterBar";
    public static Button: string = "#myButton";
    public static DragAndDropSrc: string = "#drop1";
    public static DragAndDropTo: string = "#drop2";
    public static Draggable: string = "#logo";
    public static Checkbox: string = "*[name='checkBoxName1']";
}