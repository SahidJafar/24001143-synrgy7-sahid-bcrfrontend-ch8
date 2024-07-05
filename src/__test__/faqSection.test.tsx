import { render, screen } from "@testing-library/react"
import FaqSection from "../components/fragments/LandingPage/faqSection" // Sesuaikan dengan path komponen FaqSection

describe("FaqSection Component", () => {
  it("renders correctly", () => {
    render(<FaqSection />)

    // Check if the main title is rendered
    const mainTitle = screen.getByText("Frequently Asked Question")
    expect(mainTitle).toBeInTheDocument()

    // Check if the first FAQ question is rendered
    const question1 = screen.getByText("Apa saja syarat yang dibutuhkan?")
    expect(question1).toBeInTheDocument()

    // Check if the second FAQ question is rendered
    const question2 = screen.getByText("Berapa hari minimal sewa mobil lepas kunci?")
    expect(question2).toBeInTheDocument()

    // Check if the third FAQ question is rendered
    const question3 = screen.getByText("Berapa hari sebelumnya sabaiknya booking sewa mobil?")
    expect(question3).toBeInTheDocument()

    // Check if the fourth FAQ question is rendered
    const question4 = screen.getByText("Apakah Ada biaya antar-jemput?")
    expect(question4).toBeInTheDocument()

    // Optional: Check for specific elements or styles
    const faqSection = screen.getByTestId("faq")
    expect(faqSection).toHaveClass("py-10")

    // Example assertion for style check (uncomment and adjust as needed)
    // const containerElement = screen.getByText('Frequently Asked Question').closest('.container');
    // expect(containerElement).toHaveClass('md:w-3/4');

    // You can add more specific checks as needed based on your component structure
  })
})
