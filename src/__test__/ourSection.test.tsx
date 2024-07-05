import { render, screen } from "@testing-library/react"
import OurSection from "../components/fragments/LandingPage/ourSection"

describe("OurSection Component", () => {
  it("renders the component correctly", () => {
    render(<OurSection />)

    // Check for the heading
    const headingElement = screen.getByRole("heading", { name: /Best Car Rental for any kind of trip in \(Lokasimu\)!/i })
    expect(headingElement).toBeInTheDocument()

    // Check for the paragraph
    const paragraphElement = screen.getByText(/Sewa mobil di \(Lokasimu\) bersama Binar Car Rental/i)
    expect(paragraphElement).toBeInTheDocument()

    // Check for the list items
    const listItems = screen.getAllByRole("listitem")
    expect(listItems.length).toBe(5)

    // Check for the check icons
    const checkIcons = screen.getAllByTestId("check-icon")
    expect(checkIcons.length).toBe(5)
  })
})
