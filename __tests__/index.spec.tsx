import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Link from "next/link";

describe("Home", () => {
  it("renders a heading", () => {
    render(
      <Link href="/abc" className="abc">
        My link
      </Link>
    );
    const link = screen.getByRole("link");
    expect(link).toHaveClass("abc");
  });
});
