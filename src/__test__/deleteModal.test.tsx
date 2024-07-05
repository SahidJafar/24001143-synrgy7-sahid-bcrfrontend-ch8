import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import DeleteModal from "../components/elements/deleteModal" // Adjust the path as needed

describe("DeleteModal", () => {
  it("renders correctly and handles confirm and cancel actions", () => {
    const onConfirm = jest.fn()
    const onCancel = jest.fn()

    render(<DeleteModal onConfirm={onConfirm} onCancel={onCancel} />)

    // Check if the modal elements are rendered correctly
    expect(screen.getByText("Menghapus Data Mobil")).toBeInTheDocument()
    expect(screen.getByText("Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Ya" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Tidak" })).toBeInTheDocument()

    // Simulate button clicks
    fireEvent.click(screen.getByRole("button", { name: "Ya" }))
    expect(onConfirm).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByRole("button", { name: "Tidak" }))
    expect(onCancel).toHaveBeenCalledTimes(1)
  })
})
