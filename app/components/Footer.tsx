const Footer = () => {
  return (
    <div className="border-b-2 py-5 lg:py-8 mb-15 font-abc-marist text-lg leading-none font-medium md:flex">
        <h1 className="uppercase md:w-1/2 text-lg md:text-[2.5vw] xl:text-[2.2vw]">Get in Touch</h1>
        <div className="mt-20 md:mt-0 flex flex-col gap-8 md:w-1/2 text-lg md:text-[2.5vw] xl:text-[2.2vw]">
            <h1>hello@vertex.com</h1>
            <div>
                <h1>12-13 Noland Street,</h1>
                <h1>Pullex House,</h1>
                <h1>2nd Floor East</h1>
                <h1>Mumbai, W1F 8QB</h1>
            </div>
            <div className="flex flex-col">
                <a href="https://www.linkedin.com/in/clever-coder/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://x.com/CleverCoder0" target="_blank" rel="noopener noreferrer">X | Twitter</a>
            </div>
        </div>
    </div>
  )
}

export default Footer