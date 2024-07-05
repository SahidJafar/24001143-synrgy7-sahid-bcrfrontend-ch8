import { render, screen } from "@testing-library/react"
import Dashboard from "../components/fragments/Dashboard/dashboard" // Sesuaikan dengan path komponen Dashboard

describe("Dashboard Component", () => {
  it("renders correctly", () => {
    render(<Dashboard />)

    // Check if the main title is rendered
    const mainTitles = screen.getAllByText("Dashboard")
    expect(mainTitles.length).toBe(3) // Adjust this based on the actual number of elements

    // Check if the navigation elements are rendered correctly
    const navigationElements = screen.getAllByRole("heading")
    expect(navigationElements.length).toBe(1) // Expecting one <h1> element with role="heading"

    // Optional: Check for specific text or elements
    const chevronIcon = screen.queryByTestId("chevron-icon")
    expect(chevronIcon).toBeInTheDocument() // Assert that the chevron icon is present

    // Example assertion for style check (uncomment and adjust as needed)
    // const flexRowElement = screen.getByText('Dashboard').closest('.flex-row');
    // expect(flexRowElement).toHaveClass('space-x-2');
  })
})
