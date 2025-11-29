import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import COLD from '@mui/icons-material/AcUnit';
import HOT from '@mui/icons-material/WbSunny';
import RAIN from '@mui/icons-material/Thunderstorm';

import './InfoBox.css'

export default function InfoBox({info}) {
    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const COLD_URL = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
  
  return (
    <div className="box">
      <div className="card">
      <Card>
      <CardMedia
        sx={{ height: 200 }}
        image={info.humidity>90 ? RAIN_URL : info.temp<15 ? COLD_URL : HOT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>90 ? <RAIN/> : info.temp<15 ? <COLD/> : <HOT/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component = {"span"} >
            <p>Temperature: {info.temp}&deg;C</p>
            <p>Min Temperature: {info.temp_min}</p>
            <p>temp_max: {info.temp_max}</p>
            <p>humidity: {info.humidity}</p>
            <p>feels_like: {info.feels_like}</p>
            <p>The weather can be discribed as <u>{info.weather}</u> and feels like {info.feels_like}&deg;C.</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  );
}
