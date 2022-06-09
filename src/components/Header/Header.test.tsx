import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it's called", () => {
    test("Then it should render 1 image with the alternative text 'Pet's House logo'", () => {
      render(<Header pageName={"Pet's"} adminUser={false} />);

      expect(screen.getByAltText("Pet's House logo")).toBeInTheDocument();
    });
  });

  describe("When it's called and receives a pageName 'Pet's' and adminUser true", () => {
    test("Then it should render 1 heading with the text 'Pet's'", () => {
      render(<Header pageName={"Pet's"} adminUser={true} />);

      expect(
        screen.getByRole("heading", { level: 1, name: "Pet's" })
      ).toBeInTheDocument();
    });

    test("Then it should render 1 button with the text +New'", () => {
      render(<Header pageName={"Pet's"} adminUser={true} />);

      expect(screen.getByRole("button", { name: "+New" })).toBeInTheDocument();
    });
  });

  describe("When it's called and receives a pageName 'More about' and adminUser true", () => {
    test("Then it should render 1 heading with the text 'More about'", () => {
      render(<Header pageName={"More about"} adminUser={true} />);

      expect(
        screen.getByRole("heading", { level: 1, name: "More about" })
      ).toBeInTheDocument();
    });
  });

  describe("When it's called and receives a pageName 'List of Pet's' and adminUser false", () => {
    test("Then it should not render any button", () => {
      render(<Header pageName={"List of Pet's"} adminUser={false} />);

      expect(screen.queryByRole("button")).toBeNull();
    });
  });
});
