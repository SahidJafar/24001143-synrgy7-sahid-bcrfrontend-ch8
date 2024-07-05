import { render, waitFor } from "@testing-library/react"
import Footer from "../components/fragments/LandingPage/footer"

describe("Footer Component", () => {
  it("renders footer with correct content", () => {
    const { getByText } = render(<Footer />)

    // Test footer content
    expect(getByText("Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000")).toBeInTheDocument()
    expect(getByText("binarcarrental@gmail.com")).toBeInTheDocument()
    expect(getByText("081-233-334-808")).toBeInTheDocument()
    expect(getByText("Our Services")).toBeInTheDocument()
    expect(getByText("Why Us")).toBeInTheDocument()
    expect(getByText("Testimonial")).toBeInTheDocument()
    expect(getByText("FAQ")).toBeInTheDocument()
    expect(getByText("Connect with us")).toBeInTheDocument()
    expect(getByText("Copyright Binar 2022")).toBeInTheDocument()
  })

  it("renders social media icons", async () => {
    render(<Footer />)

    await waitFor(() => {
      // Test presence of social media icons
      const facebookIcon = document.querySelector(".feather-facebook")
      const instagramIcon = document.querySelector(".feather-instagram")
      const twitterIcon = document.querySelector(".feather-twitter")
      const mailIcon = document.querySelector(".feather-mail")
      const twitchIcon = document.querySelector(".feather-twitch")

      expect(facebookIcon).toBeInTheDocument()
      expect(instagramIcon).toBeInTheDocument()
      expect(twitterIcon).toBeInTheDocument()
      expect(mailIcon).toBeInTheDocument()
      expect(twitchIcon).toBeInTheDocument()
    })
  })
})
