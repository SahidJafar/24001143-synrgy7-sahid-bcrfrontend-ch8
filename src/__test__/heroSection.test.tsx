import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import HeroSection from "../components/fragments/LandingPage/heroSection"

describe("HeroSection Component", () => {
  it("renders the component correctly", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <HeroSection />
      </MemoryRouter>
    )

    // Check for the heading text
    const headingElement = screen.getByText(/Sewa & Rental Mobil Terbaik di kawasan/i)
    expect(headingElement).toBeInTheDocument()

    // Check for the paragraph text
    const paragraphElement = screen.getByText(/Selamat datang di Binar Car Rental/i)
    expect(paragraphElement).toBeInTheDocument()

    // Check for the "Mulai Sewa Mobil" button when not on "/cars" page
    const linkElement = screen.queryByRole("link", { name: /Mulai Sewa Mobil/i })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute("href", "/cars")

    // Check that the image is rendered
    const imageElement = screen.getByAltText("Car")
    expect(imageElement).toBeInTheDocument()
  })

  it('does not render the "Mulai Sewa Mobil" button on the "/cars" page', () => {
    render(
      <MemoryRouter initialEntries={["/cars"]}>
        <HeroSection />
      </MemoryRouter>
    )

    // Check that the "Mulai Sewa Mobil" button is not rendered
    const linkElement = screen.queryByRole("link", { name: /Mulai Sewa Mobil/i })
    expect(linkElement).not.toBeInTheDocument()
  })
})
