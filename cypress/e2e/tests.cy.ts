import { Pom } from "../framework/pom";
import '@4tw/cypress-drag-drop'
import dragAndDrop from "../support/drag-and-drop";
import { Console } from "console";
import { initial } from "cypress/types/lodash";


describe("seleniumbase.id demo tests", () => {
  it("Text Input Field Accepts Input", () => {
    const text: string = "Hello World";

    cy.visit(Pom.URL)
      .get(Pom.TextInput)
      .type(text)
      .then(input => input.val().toString())
      .then(value => expect(value).to.be.equal(text));
  });


  it("Select Dropdown Can Select", () => {
    const text: string = "Set to 50%";
    const metterValueExpected: string = "0.5";

    cy.visit(Pom.URL)
      .get(Pom.SelectDropdown)
      .select(text)
      .then(select => select.val() as string)
      .then(selected => expect(selected).to.be.equal("50%"))
      .get(Pom.MetterBar)
      .then(metterBar => metterBar.val().toString())
      .then(metterVal => expect(metterVal.toString()).to.equal(metterValueExpected));
  });

  it("Button Color Changes On Click", () => {
    let initialExpected: string = "green";
    let afterExpected: string = "purple";

    cy.visit(Pom.URL)
      .get(Pom.Button)
      .then(btn => btn.attr("style"))
      .then(style => expect(style).to.include(initialExpected))
      .get(Pom.Button)
      .click()
      .then(btn => btn.attr("style"))
      .then(style => expect(style).to.include(afterExpected));
  });

  it("Drag And Drop Test", () => {
    cy.visit(Pom.URL)
      .get(Pom.Checkbox)
      .click()
      .get(Pom.Draggable)
      .then(draggableInit => {
        const { left: initialX, top: initialY } = draggableInit.position();
        cy.window()
          .then(win => win.eval(dragAndDrop(Pom.Draggable, Pom.DragAndDropTo)))
          .get(Pom.Draggable)
          .then(dragableAfter => {
            const { left: afterX, top: afterY } = dragableAfter.position();
            expect(afterX).to.be.greaterThan(initialX);
            expect(afterY).to.be.equal(initialY);
          });
      })
  })
})