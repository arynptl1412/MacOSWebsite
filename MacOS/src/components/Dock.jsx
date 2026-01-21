import React from 'react'
import './dock.scss'

const Dock = () => {
    return (
        <footer className='dock'>
            <div className="icon github"><img src="/doc-images/github.svg" alt="" /></div>
            <div className="icon note"><img src="/doc-images/note.svg" alt="" /></div>
            <div className="icon pdf"><img src="/doc-images/pdf.svg" alt="" /></div>
            <div className="icon calender"><img src="/doc-images/calender.svg" alt="" /></div>
            <div className="icon spotify"><img src="/doc-images/spotify.svg" alt="" /></div>
            <div className="icon mail"><img src="/doc-images/mail.svg" alt="" /></div>
            <div className="icon link"><img src="/doc-images/link.svg" alt="" /></div>
            <div className="icon cli"><img src="/doc-images/cli.svg" alt="" /></div>
        </footer>
    )
}

export default Dock