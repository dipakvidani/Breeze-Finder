import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    
   const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
   const COLD_URL="https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
   const RAIN_URL="https://images.unsplash.com/photo-1635823288719-93f2c8ac7f3f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    
    return(
        <div className="InfoBox">
            <div className='CardContiner'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:(info.temp>15)?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}&nbsp;&nbsp;   {
            info.humidity>80
            ?<ThunderstormIcon style={{color:"gray"}}/>
            :(info.temp>15)?
            <LightModeIcon style={{color:"orange"}}/>:<AcUnitIcon style={{color:"lightblue"}}/>
          }
        </Typography>
        <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary' }}>
          <p>Temprature:{info.temp}&deg;C</p>
          <p>Humidity:{info.humidity}</p>
          <p>Min Temprature:{info.tempMin}&deg;C</p>
          <p>Max Temprature:{info.tempMax}&deg;C</p>
          <p>The Weather can be Describe as <i><b> {info.weather} </b></i> and Feels Like {info.feelslike}&deg;C</p>
             </Typography>
      </CardContent>
      
    </Card>
    </div>

        </div>
    )
}