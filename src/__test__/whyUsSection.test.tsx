import { render } from "@testing-library/react"
import WhyUsSection from "../components/fragments/LandingPage/whyUsSection"

describe("WhyUsSection Component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<WhyUsSection />)
    expect(getByText("Why Us?")).toBeInTheDocument()
  })
})
