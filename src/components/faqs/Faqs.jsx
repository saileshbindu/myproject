import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import './Faqs.css'
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useEffect, useState} from 'react';

const Faqs = () => {
    const [faqvalue, Setfaqvalue] = useState([])

    useEffect(()=>{
        const faqsFetch = async() =>{
            try {
                const faqRes = await axios.get("https://qtify-backend-labs.crio.do/faq")
                Setfaqvalue([...faqvalue, faqRes.data]);
                console.log(faqRes.data)
            } catch (error) {
                console.log("Error while fetching data", error)
            }
        }
        faqsFetch();
    },[])

    return (
        <div className='faqmain'>
            <Typography className='headerText'>FAQs</Typography>
                
            <Grid container spacing={2} columns={16} className="accordmain">
                <Grid item xs={12} className="accordChild">
                    {faqvalue.map((acc, index) => (
                        <Accordion key={index}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${index + 1}-content`}
                                id={`panel${index + 1}-header`}
                            >
                                {acc.question}
                            </AccordionSummary>
                            <AccordionDetails>
                                {acc.answer}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Grid>
            </Grid>
        </div>
    );
}

export default Faqs;
