import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import AuthSection from "../components/fragments/Auth/authSection" // Adjust the path as needed
import bgImage from "../assets/images/bg_signIn.png" // Import the background image

describe("AuthSection", () => {
  it("renders correctly with children", () => {
    render(
      <AuthSection>
        <p>Test Child</p>
      </AuthSection>
    )

    // Check if the main elements are rendered correctly
    expect(screen.getByText("Welcome, Admin BCR")).toBeInTheDocument()
    expect(screen.getByText("Test Child")).toBeInTheDocument()

    // Check if the logo div is rendered
    const logoDiv = screen.getByTestId("logo")
    expect(logoDiv).toBeInTheDocument()

    // Check if the section has the correct class
    const section = screen.getByTestId("auth")
    expect(section).toHaveClass("min-h-screen w-screen flex justify-center items-center")

    // Check if the background image is applied
    const backgroundImageDiv = section.querySelector(".bg-cover")
    expect(backgroundImageDiv).toHaveStyle(`background-image: url(${bgImage})`)
  })
})
