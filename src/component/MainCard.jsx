import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';


export default function MainCard() {

    // const [data, setData] = useState([]);

    // const params = new URLSearchParams();
    // params.append('svcCode', 'SRCH_JISA');
    // params.append('keyWord', '001');
    // params.append('cdProc', 'KEEP');
    // params.append('tpProc', 'I');

    // useEffect(() => {
    //     fetchData();
    //   }, []);
    //   const fetchData = () => {
    //     fetch('https://api.example.com/data')
    //       .then(response => response.json())
    //       .then(jsonData => {
    //         setData(jsonData);
    //         console.log(jsonData);
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    //   };
    

    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get('http://erp.cleantopia.kr/jsp/scan/api/keepApi.jsp', {
    //         params: {
    //           svcCode: "SRCH_JISA",
    //           keyWord: "001",
    //           cdProc: "KEEP",
    //           tpProc: "I",
    //         },
    //       });
    //       setData(response.data);
    //       console.log(response.data);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    
    //    const fetchData = async () => {
    //     try {
    //       const response = await axios.get('https://httpbin.org/get', {
    //         params: {
    //           svcCode: "SRCH_JISA",
    //           keyWord: "001",
    //           cdProc: "KEEP",
    //           tpProc: "I",
    //         },
    //       });
    //       setData(response.data);
    //       console.log(response.data);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    function handleKeep(){
      return (
      <div>
        <Link to="/about">소개 페이지로 이동</Link>
        </div>
      );    
    }

    return (
    <div>
         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6} onClick={handleKeep} >
                    <Card sx={{ maxWidth: 300 }} >
                        <CardActionArea >
                            <CardMedia
                            component="img"
                            height="150"
                            image="http://upload.cleantopia.kr/keep.jpg"
                            alt="KEEP"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            의류보관 입/출고
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            의류보관 입/출고 내역을 처리히여, 보관택을 스캔하여 위탁창고로 출고처리
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Card sx={{ maxWidth: 300 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="150"
                            image="http://upload.cleantopia.kr/blec.jpg"
                            alt="BLEC"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            BLEC 입/출고
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            특수세탁부에서 처리하는 BLEC 품목에 대한 입출고 처리
                            </Typography>
                            </CardContent>
                            
                        </CardActionArea>
                        </Card>
                </Grid>
        </Grid>
    </div>      
  );
}
