"use client"
import React, { useEffect } from 'react'
import "./profile.css"
import Table from 'react-bootstrap/Table';
import Header from '@/Components/Header';
import Link from 'next/link';
import  axios  from 'axios';

const Profile = () => {

    const logoutDone = () => {
        window.location.reload(false);
    }


    // const Process = async() =>{

    //   const response = await axios.get('https://scube.jsontech.in/api/loginStatus'); 
    //   let LoginStatusCheck = response.data;
    //   console.log(JSON.stringify(LoginStatusCheck));

    //   if(LoginStatusCheck===true){
    //     window.location.href = "/Profile"
    //   }
    //   else{
    //     window.location.href = "/Login"

    //   }

    // }


    // useEffect(() => {

    //  Process();
       
      
     
    // }, [])
    


  return (
    <>
    
    <Header/>

  <div>
  <div className="row">
  <div className="col s12 m9 l12">
    <div id="striped" className="section scrollspy">
      <div className="row">
        <div className="col s12">
        <Table striped bordered hover>
            <thead>
              <tr className="blue lighten-4 ">
                <th data-field="id" className="center">Booking ID</th>
                <th data-field="name" className="center">Name</th>
                <th data-field="name" className="center">Booking Date</th>
                <th data-field="name" className="center">Tour Code</th>
                <th data-field="name" className="center">Date In</th>
                <th data-field="name" className="center">Date Out</th>
                <th data-field="name" className="center">Night</th>
                <th data-field="price" colSpan="4" className="center">Room Type</th>
                <th data-field="name" className="center">Issue By</th>
                <th data-field="name" className="center">Update Time</th>
                <th data-field="name" className="center">Status</th>
              </tr>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th className="center purple accent-1">sgl</th>
                <th className="center purple accent-1">twn</th>
                <th className="center purple accent-1">dbl</th>
                <th className="center purple accent-1">trp</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="center">1</td>
                <td className="center">Sarawoot</td>
                <td className="center">07/04/2016</td>
                <td className="center">A0001</td>
                <td className="center">07/04/2016</td>
                <td className="center">30/04/2016</td>
                <td className="center">3</td>
                <td className="center">1</td>
                <td className="center">-</td>
                <td className="center">-</td>
                <td className="center">1</td>
                <td className="center">Joox</td>
                <td className="center">07/04/2016</td>
                <td className="center">yes</td>
              </tr>
              <tr>
                <td className="center">2</td>
                <td className="center">Sarawoot</td>
                <td className="center">01/04/2016</td>
                <td className="center">A0002</td>
                <td className="center">01/04/2016</td>
                <td className="center">05/04/2016</td>
                <td className="center">4</td>
                <td className="center">-</td>
                <td className="center">1</td>
                <td className="center">-</td>
                <td className="center"></td>
                <td className="center">Joox</td>
                <td className="center">01/04/2016</td>
                <td className="center">no</td>
              </tr>
              <tr>
                <td className="center">1</td>
                <td className="center">Sarawoot</td>
                <td className="center">07/04/2016</td>
                <td className="center">A0001</td>
                <td className="center">07/04/2016</td>
                <td className="center">30/04/2016</td>
                <td className="center">3</td>
                <td className="center">1</td>
                <td className="center">-</td>
                <td className="center">-</td>
                <td className="center">1</td>
                <td className="center">Joox</td>
                <td className="center">07/04/2016</td>
                <td className="center">yes</td>
              </tr>

              <tr>
                <td className="center">1</td>
                <td className="center">Sarawoot</td>
                <td className="center">07/04/2016</td>
                <td className="center">A0001</td>
                <td className="center">07/04/2016</td>
                <td className="center">30/04/2016</td>
                <td className="center">3</td>
                <td className="center">1</td>
                <td className="center">-</td>
                <td className="center">-</td>
                <td className="center">1</td>
                <td className="center">Joox</td>
                <td className="center">07/04/2016</td>
                <td className="center">yes</td>
              </tr>

              <tr>
                <td className="center">1</td>
                <td className="center">Sarawoot</td>
                <td className="center">07/04/2016</td>
                <td className="center">A0001</td>
                <td className="center">07/04/2016</td>
                <td className="center">30/04/2016</td>
                <td className="center">3</td>
                <td className="center">1</td>
                <td className="center">-</td>
                <td className="center">-</td>
                <td className="center">1</td>
                <td className="center">Joox</td>
                <td className="center">07/04/2016</td>
                <td className="center">yes</td>
              </tr>
              <tr>
                <td className="center">2</td>
                <td className="center">Sarawoot</td>
                <td className="center">01/04/2016</td>
                <td className="center">A0002</td>
                <td className="center">01/04/2016</td>
                <td className="center">05/04/2016</td>
                <td className="center">4</td>
                <td className="center">-</td>
                <td className="center">1</td>
                <td className="center">-</td>
                <td className="center"></td>
                <td className="center">Joox</td>
                <td className="center">01/04/2016</td>
                <td className="center">no</td>
              </tr>
              <tr>
                <td className="center">1</td>
                <td className="center">Sarawoot</td>
                <td className="center">07/04/2016</td>
                <td className="center">A0001</td>
                <td className="center">07/04/2016</td>
                <td className="center">30/04/2016</td>
                <td className="center">3</td>
                <td className="center">1</td>
                <td className="center">-</td>
                <td className="center">-</td>
                <td className="center">1</td>
                <td className="center">Joox</td>
                <td className="center">07/04/2016</td>
                <td className="center">yes</td>
              </tr>
              <tr>
                <td className="center">2</td>
                <td className="center">Sarawoot</td>
                <td className="center">01/04/2016</td>
                <td className="center">A0002</td>
                <td className="center">01/04/2016</td>
                <td className="center">05/04/2016</td>
                <td className="center">4</td>
                <td className="center">-</td>
                <td className="center">1</td>
                <td className="center">-</td>
                <td className="center"></td>
                <td className="center">Joox</td>
                <td className="center">01/04/2016</td>
                <td className="center">no</td>
              </tr>

            </tbody>
            </Table>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
      <div className='flex justify-end gap-4 fixed bottom-10 right-10 min-w-full'>
      <button onClick={toLogin} className='bg-[#94D163] text-2xl text-black font-bold w-[100px] p-[10px] rounded-sm'>Logout</button>
      </div>
      </>
  )
}

// redirect to login route
const toLogin = () => {
  window.location.href = "/";
}

export default Profile
