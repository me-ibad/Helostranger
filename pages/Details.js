import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from 'next/head'
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useRouter } from 'next/router'
function Details() {
  const router = useRouter()
  var pid = router.query.id

  const [allpost, setallpost] = useState([]);


  async function fetchblog(){
  
    var config=require("../config");
    var url=config.url;
 
      const response= await fetch(url+"/api/readdetail", {
        method: "post",
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        body: `id=${pid}`,
        // body: JSON.stringify({
        //   fabric: fabric,
          
        // })
      });
      const json=await response.json();
     //// alert(json[0].message)
   setallpost(json[0])


      }
      useEffect(() => {
 
        fetchblog();  
                },[]);
  
  



  
    return (

      <main>
      <Head>
  
  <title>Helostrange</title>
  <meta name="description" 
  content="helostranger is platform to talk with strangers.Best Plarform to talk with stranger people and say hellostranger"></meta>
  </Head>
        <div>

         <IndexNavbar fixed />
         
      <section className="header relative pt-16 items-center flex h-4/5 max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
        <div className="w-full md:w-8/12  ">
       
            <div className=" ">
            {allpost!=""? <>

             <br/><br/><br/>
             <h1 className="font-bold text-5xl text-gray-700">
              {allpost.topic}
              </h1>

              <br/><br/>
              <p className="mb-4 text-gray-600 break-words">
              {allpost.message}
                      </p>
                      <p className="mb-4 text-gray-600 break-words">
              {allpost.name}
                      </p>

                      </>:<>
             
             <CircularProgress />
             
             </>}


            </div>
            </div>
            </div>
             
             </section>  
            
             <br/><br/>
             <Footer />   
        </div>
        </main>
    )
}

export default Details
