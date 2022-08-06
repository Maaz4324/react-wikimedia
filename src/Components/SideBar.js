import React from 'react'
import VB from '../images/VB.jpg'
import '../style/SideBar.css'

function SideBar() {
  return (
    <div className='sidebar-container'>
      <h3>Vitalik Buterin</h3>
        <img src={VB} alt="NAv" />
        <div className="sidebar-info-container">
                <ul>
                    <li>Born:31 January 1994 (age 28)
Kolomna, Russia</li>
                    <li>Nationality:Canadian
Montenegrin</li>
                    <li>Education: 	University of Waterloo</li>
                    <li>Known for: Ethereum, Bitcoin Magazine</li>
                    <li>Awards: Thiel Fellowship</li>
                    <li>Fields:	Digital contracts, digital currencies, game theory</li>
                    <li>Website: vitalik.ca</li>
                </ul>
        </div>
    </div>
  )
}

export default SideBar