import {Appbar} from "../components/appbar";
import '../css/style.css'
import HomeBody from "../components/home/homebody";


export function Home() {

    return (<>
        <Appbar/>
       <HomeBody/>

    </>);

}

/*
      <h1  style={{color:"#FFFFFF"}} >Hello </h1>
        <div style={{position: "relative", paddingTop:"41.42857142857143%"}}>
            <iframe
                title="data"
                src="https://iframe.mediadelivery.net/embed/35275/768f33bd-fe08-4b4c-bbf3-4afbb5a2d431?autoplay=true"
                loading="lazy" style={{border: "none", position: "absolute", top: "0", height: "100%", width: "100%"}}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen="true"></iframe>
        </div>



 */