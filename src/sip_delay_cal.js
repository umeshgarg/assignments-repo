import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import { useNavigate } from "react-router-dom";


const Input = styled(MuiInput)`
  width: 42px;
`;

const monthlyInvestmentMarks = [
  {
    value: 2000,
    label: '2,000',
  },
  {
    value: 101800,
    label: '101,800',
  },
  {
    value: 201600,
    label: '201,600',
  },
  {
    value: 301400,
    label: '301,400',
  },
  {
    value: 401200,
    label: '401,200',
  },
  {
    value: 501000,
    label: '501,000',
  },
  {
    value: 600800,
    label: '600,800',
  },
  {
    value: 700600,
    label: '700,600',
  },
  {
    value: 800400,
    label: '800,400',
  },
  {
    value: 900200,
    label: '900,200',
  },
  {
    value: 1000000,
    label: '1,000,000',
  },
];

const investmentPeriodMarks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 7,
    label: '7',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 13,
    label: '13',
  },
  {
    value: 15,
    label: '15',
  },
  {
    value: 18,
    label: '18',
  },
  {
    value: 21,
    label: '21',
  },
  {
    value: 24,
    label: '24',
  },
  {
    value: 27,
    label: '27',
  },
  {
    value: 30,
    label: '30',
  },
];

const expectedRateOfReturnMarks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 3.9,
    label: '3.9',
  },
  {
    value: 6.8,
    label: '6.8',
  },
  {
    value: 9.7,
    label: '9.7',
  },
  {
    value: 12.6,
    label: '12.6',
  },
  {
    value: 15.5,
    label: '15.5',
  },
  {
    value: 18.4,
    label: '18.4',
  },
  {
    value: 21.3,
    label: '21.3',
  },
  {
    value: 24.2,
    label: '24.2',
  },
  {
    value: 27.1,
    label: '27.1',
  },
  {
    value: 30,
    label: '30',
  },
];

function monthlyInvestmentText(value) {
  return `Rs. ${value}`;
}

function investmentPeriodText(value) {
  return `${value} yrs`;
}

function expectedRateOfReturnText(value) {
  return `${value} %`;
}

 export default function SipDelayCal() {
  const [monthlyInvestmentValue, setMonthlyInvestment] = React.useState(100000);
  const [investmentPeriodValue, setInvestmentPeriod ] = React.useState(5);
  const [expectedRateOfReturnValue, setExpectedRateOfReturn] = React.useState(12);

  const handleMonthlyInvestmentSliderChange = (event, newMonthlyInvestmentValue) => {
    setMonthlyInvestment(newMonthlyInvestmentValue);
  };

  const handleInvestmentPeriodSliderChange = (event, newInvestmentPeriodValue) => {
    setInvestmentPeriod(newInvestmentPeriodValue);
  };

  const handleExpectedRateOfReturnSliderChange = (event, newExpectedRateOfReturnValue) => {
    setExpectedRateOfReturn(newExpectedRateOfReturnValue);
  };

  const handleMonthlyInvestmentChange = (event) => {
    setMonthlyInvestment(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleInvestmentPeriodChange = (event) => {
    setInvestmentPeriod(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleExpectedRateOfReturnChange = (event) => {
    setExpectedRateOfReturn(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleMonthlyInvestmentBlur = () => {
    if (monthlyInvestmentValue < 0) {
      setMonthlyInvestment(2000);
    } else if (monthlyInvestmentValue > 1000000) {
      setMonthlyInvestment(1000000);
    }
  };

  const handleInvestmentPeriodBlur = () => {
    if (investmentPeriodValue < 0) {
      setInvestmentPeriod(1);
    } else if (investmentPeriodValue > 30) {
      setInvestmentPeriod(30);
    }
  };

  const handleExpectedRateOfReturnBlur = () => {
    if (expectedRateOfReturnValue < 0) {
      setExpectedRateOfReturn(1);
    } else if (expectedRateOfReturnValue > 30) {
      setExpectedRateOfReturn(30);
    }
  };

  const textStyle = {
    fontSize: "1.5rem",
    fontWeight: "500",
    letterSpacing: "0",
    lineHeight: "1.5em",
    paddingBottom: "15px",
    Color: "#333333",
    // color: "#606470",
  };

  let navigate = useNavigate();
  const Button = () => (
    <button
      type='button'
      onClick={() => { 
        let r = expectedRateOfReturnValue;
        let p = monthlyInvestmentValue;
        let n = investmentPeriodValue*12;
        // let i = r/100/12;
        // console.log(Math.floor(p*((1+i)^(n-1))*(1+i)/i));
        let res = Math.floor(p*(1+r/100)*n);
        navigate("/result", { result: res});
      }}
    >
      Calculate
    </button>
  )

  return (
      <>
        <div className="back-btn">
          <a href="/" style={{ textDecoration: "none", color: "#333333" }}>
            <i class="bi bi-arrow-left-circle" style={{ fontSize: "3rem" }}></i>
            <span
              style={{
                fontSize: "1.0rem",
                marginLeft: "0.2rem",
                color: "#333333",
              }}
            >
              ← Back
            </span>
          </a>
        </div>

        <h1 style={textStyle}>SIP DELAY CALCULATOR</h1>

        <Box>
        <br></br>
        <Typography id="input-slider" gutterBottom>
            Monthly Investment (Rs.)
        </Typography>
        <br></br>
        <Grid container spacing={2} alignItems="center">
            <Grid item xs>
            <Slider
                value={typeof monthlyInvestmentValue === 'number' ? monthlyInvestmentValue : 0}
                onChange={handleMonthlyInvestmentSliderChange}
                aria-label="Monthly Investment"
                // marks={true}
                marks={monthlyInvestmentMarks}
                getAriaValueText={monthlyInvestmentText}
                // step={99800}
                valueLabelDisplay="auto"
                min={2000}
                max={1000000}
            />
            </Grid>
            <Grid item>
            <Input
                value={monthlyInvestmentValue}
                onChange={handleMonthlyInvestmentChange}
                onBlur={handleMonthlyInvestmentBlur}
                inputProps={{
                // step: 99800,
                min: 2000,
                max: 1000000,
                type: 'number',
                'aria-labelledby': 'input-slider',
                }}
            />
            </Grid>
        </Grid>
    </Box>

    <Box>
        <br></br>
        <Typography id="input-slider" gutterBottom>
            Investment Period (in years)
        </Typography>
        <br></br>
        <Grid container spacing={2} alignItems="center">
            <Grid item xs>
            <Slider
                value={typeof investmentPeriodValue === 'number' ? investmentPeriodValue : 0}
                onChange={handleInvestmentPeriodSliderChange}
                aria-label="Investment Period"
                // marks={true}
                marks={investmentPeriodMarks}
                getAriaValueText={investmentPeriodText}
                // step={3}
                valueLabelDisplay="auto"
                min={1}
                max={30}
            />
            </Grid>
            <Grid item>
            <Input
                value={investmentPeriodValue}
                onChange={handleInvestmentPeriodChange}
                onBlur={handleInvestmentPeriodBlur}
                inputProps={{
                // step: 3,
                min: 1,
                max: 30,
                type: 'number',
                'aria-labelledby': 'input-slider',
                }}
            />
            </Grid>
        </Grid>
    </Box>


    <Box>
        <br></br>
        <Typography id="input-slider" gutterBottom>
            Expected Rate Of Return (% p.a)
        </Typography>
        <br></br>
        <Grid container spacing={2} alignItems="center">
            <Grid item xs>
            <Slider
                value={typeof expectedRateOfReturnValue === 'number' ? expectedRateOfReturnValue : 0}
                onChange={handleExpectedRateOfReturnSliderChange}
                aria-label="Expected Rate Of Return"
                // marks={true}
                marks={expectedRateOfReturnMarks}
                getAriaValueText={expectedRateOfReturnText}
                step={0.1}
                valueLabelDisplay="auto"
                min={1}
                max={30}
            />
            </Grid>
            <Grid item>
            <Input
                value={expectedRateOfReturnValue}
                onChange={handleExpectedRateOfReturnChange}
                onBlur={handleExpectedRateOfReturnBlur}
                inputProps={{
                step: 0.1,
                min: 1,
                max: 30,
                type: 'number',
                'aria-labelledby': 'input-slider',
                }}
            />
            </Grid>
        </Grid>
      </Box>

      {/* calculate button */}
      <Button/>
    </>
  );
}