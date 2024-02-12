import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

test("renders logo image", () => {
  const { getByAltText } = render(<Header />);
  const logoImage = getByAltText("logo");
  expect(logoImage).toBeInTheDocument();
  expect(logoImage).toHaveAttribute(
    "src",
    "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
  );
});
