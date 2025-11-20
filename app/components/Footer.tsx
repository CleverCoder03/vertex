const Footer = () => {
  return (
    <div className="border-b-2 py-5 lg:py-8 mb-15 font-abc-marist text-lg leading-none font-medium">
        <h1 className="uppercase">Get in Touch</h1>
        <div className="mt-20 flex flex-col gap-8">
            <h1>hello@vertex.com</h1>
            <div>
                <h1>12-13 Poland Street,</h1>
                <h1>Noland House,</h1>
                <h1>2nd Floor South</h1>
                <h1>London, W1F 8QB</h1>
            </div>
            <div className="flex flex-col">
                <a href="http://" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </div>
    </div>
  )
}

export default Footer