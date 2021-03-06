import Spinner from 'react-bootstrap/Spinner'

function Loading() {
  return (
    <center style={{display:"grid", placeItems:"center",height:"100vh"}}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <img src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c543.png"
            alt=""
            style={{marginBottom:10}}
            height={200}
            />
             <Spinner animation="border" variant="success" />
        </div>
    </center>
  )
}


export default Loading;