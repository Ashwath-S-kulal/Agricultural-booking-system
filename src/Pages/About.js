import React from 'react'

function About() {
  return (
    <div style={{ padding: '40px', maxWidth: '100%', 
      marginTop: '0px' ,marginLeft:"auto", marginRight:"auto",backgroundColor: '#f9f9f9', textAlign:"justify" }}>
        <h1>About Project</h1>

        <h2>Introduction</h2>
        <p>In the modern agricultural sector, access to mechanized equipment plays a crucial role in 
          increasing productivity and efficiency. However, not every farmer can afford to purchase 
          expensive machinery such as tractors, harvesters, or ploughing equipment. At the same time,
           many contractors or machine owners have surplus equipment that remains underutilized for 
           most of the year. This project aims to solve this mismatch by creating a digital platform 
           that connects farmers with contractors, allowing farmers to book agricultural machines for
            specific dates, with or without skilled operators.</p>

        <h2>Project Objective</h2>
        <p>The main objective of the project is to develop a web-based or mobile-based system that
           facilitates smooth coordination between farmers who need machinery for agricultural operations 
           and contractors who own and rent out agricultural equipment. The platform will allow contractors
            to register their machines and availability, while farmers can book machines for particular
             dates based on their farming requirements. This system enhances accessibility, reduces manual 
             processes, and promotes better equipment utilization across rural regions.</p>
        
        <h2>Farmer Module</h2>
        <p>The farmer module provides an easy-to-use interface for farmers
           to search, select, and book machines for their agricultural needs.
            Farmers can view machine listings, check availability, compare prices, 
            and book according to their land size and crop schedule.</p>
        <ol>
          <li>Browse machines by category (e.g., tilling, harvesting, spraying)</li>
          <li>Register/login with contact details and farm location</li>
          <li>Filter results by date, location, machine type, or price</li>
          <li>View contractor profile, machine photos, and past reviews</li>
          <li>Select desired machine(s) and specify:</li>
            <li style={{listStyle:"none"}}>* Start and end dates</li>
            <li style={{listStyle:"none"}}>* Land area to be serviced</li>
            <li style={{listStyle:"none"}}>* Whether a worker/operator is needed</li>
        </ol>

        <h2>Conclusion</h2>
        <p>This agricultural domain project bridges a critical gap between machine owners
          (contractors) and machine users (farmers). It promotes mechanized farming,
          improves the financial return for contractors, and empowers farmers to enhance
           productivity without heavy investments. By digitizing this process, the platform
            creates a modern, efficient, and user-friendly solution that supports the growth 
            of the agricultural sector.</p>
    </div>
  )
}

export default About