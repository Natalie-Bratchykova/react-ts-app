import { render, prettyDOM, screen } from "@testing-library/react";
import { ItemInterface } from "../../../models/items/Item.interface";
import { ItemComponent } from "./Item.component";

// whole test
describe("Item.component: rendering", () => {
  // describe 1 unit test
  it("renders an item component correctly", () => {
    // arrange
    const testid = "unit-test-item";
    const model: ItemInterface = {
      id: 1,
      name: "Unit test item 1",
      selected: false,
    };

    // --render
    render(
      <ItemComponent testId={testid} model={model} onItemSelect={() => {}} />
    );

    // act
    const liEelement = screen.getByTestId(testid);

    // assert that element exist
    expect(liEelement).not.toBeNull();

    // get li el's children
    const children = liEelement.children;

    // assert that element has 2 children
    expect(children).toHaveLength(2);
    // assert value of the second child
    expect(children.item(1)?.innerHTML).toContain("Unit test item 1");
  });

  it("render item indicator correctly", () => {
    // arrange
    const testid = "unit-test-item";
    const model: ItemInterface = {
      id: 1,
      name: "Unit test item 2",
      selected: false,
    };

    // act
    render(<ItemComponent testId={testid} model={model} onItemSelect={()=>{}}/>)
    const liElelement = screen.getByTestId(testid);

    // assert that element exists
    expect(liElelement).not.toBeNull();

    // act - get children of the element
    const children = liElelement.children;

    // assert that there are 2 children
    expect(children).toHaveLength(2);
    // assert the value of the first child
    expect(children.item(0)?.innerHTML).toEqual("*");

  });
});
