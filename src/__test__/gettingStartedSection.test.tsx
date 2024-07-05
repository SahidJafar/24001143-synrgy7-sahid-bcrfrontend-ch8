import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import GettingStartedSection from "../components/fragments/LandingPage/gettingStartedSection"

describe("GettingStartedSection Component", () => {
  it("renders the component correctly", () => {
    render(
      <MemoryRouter>
        <GettingStartedSection />
      </MemoryRouter>
    )

    // Check for the heading text
    const headingElement = screen.getByText(/Sewa Mobil di/i)
    expect(headingElement).toBeInTheDocument()

    // Check for the paragraph text
    const paragraphElement = screen.getByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit/i)
    expect(paragraphElement).toBeInTheDocument()

    // Check for the link to "/cars"
    const linkElement = screen.getByRole("link", { name: /Mulai Sewa Mobil/i })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute("href", "/cars")

    // Check for the button within the link
    const buttonElement = screen.getByRole("button", { name: /Mulai Sewa Mobil/i })
    expect(buttonElement).toBeInTheDocument()
  })
})
