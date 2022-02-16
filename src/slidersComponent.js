import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import Graph from "./graph";

// import { useNavigate } from "react-router-dom";
// import CalculateButton from "./calculateBtn";
import { useState } from "react";

const Input = styled(MuiInput)`
  width: 82px;
  border: solid 1px;
  right: 5px;
  bottom: 15px;
`;

const monthlyInvestmentMarks = [
  {
    value: 2000,
    label: "2,000",
  },
  {
    value: 101800,
    label: "101,800",
  },
  {
    value: 201600,
    label: "201,600",
  },
  {
    value: 301400,
    label: "301,400",
  },
  {
    value: 401200,
    label: "401,200",
  },
  {
    value: 501000,
    label: "501,000",
  },
  {
    value: 600800,
    label: "600,800",
  },
  {
    value: 700600,
    label: "700,600",
  },
  {
    value: 800400,
    label: "800,400",
  },
  {
    value: 900200,
    label: "900,200",
  },
  {
    value: 1000000,
    label: "1,000,000",
  },
];

const investmentPeriodMarks = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 7,
    label: "7",
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 13,
    label: "13",
  },
  {
    value: 15,
    label: "15",
  },
  {
    value: 18,
    label: "18",
  },
  {
    value: 21,
    label: "21",
  },
  {
    value: 24,
    label: "24",
  },
  {
    value: 27,
    label: "27",
  },
  {
    value: 30,
    label: "30",
  },
];

const expectedRateOfReturnMarks = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 3.9,
    label: "3.9",
  },
  {
    value: 6.8,
    label: "6.8",
  },
  {
    value: 9.7,
    label: "9.7",
  },
  {
    value: 12.6,
    label: "12.6",
  },
  {
    value: 15.5,
    label: "15.5",
  },
  {
    value: 18.4,
    label: "18.4",
  },
  {
    value: 21.3,
    label: "21.3",
  },
  {
    value: 24.2,
    label: "24.2",
  },
  {
    value: 27.1,
    label: "27.1",
  },
  {
    value: 30,
    label: "30",
  },
];

const startSipDelayMarks = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 13,
    label: "13",
  },
  {
    value: 25,
    label: "25",
  },
  {
    value: 37,
    label: "37",
  },
  {
    value: 49,
    label: "49",
  },
  {
    value: 61,
    label: "61",
  },
  {
    value: 72,
    label: "72",
  },
  {
    value: 84,
    label: "84",
  },
  {
    value: 96,
    label: "96",
  },
  {
    value: 108,
    label: "108",
  },
  {
    value: 120,
    label: "120",
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

function startSipDelayText(value) {
  return `${value} months`;
}

export default function SipDelayCal() {
  const [monthlyInvestmentValue, setMonthlyInvestment] = React.useState(100000);
  const [investmentPeriodValue, setInvestmentPeriod] = React.useState(5);
  const [expectedRateOfReturnValue, setExpectedRateOfReturn] = React.useState(12);
  const [startSipDelayValue, setStartSipDelay] = React.useState(6);
  const [apiData, setApiData] = React.useState({});

  const handleMonthlyInvestmentSliderChange = (
    event,
    newMonthlyInvestmentValue
  ) => {
    setMonthlyInvestment(newMonthlyInvestmentValue);
  };

  const handleInvestmentPeriodSliderChange = (
    event,
    newInvestmentPeriodValue
  ) => {
    setInvestmentPeriod(newInvestmentPeriodValue);
  };

  const handleExpectedRateOfReturnSliderChange = (
    event,
    newExpectedRateOfReturnValue
  ) => {
    setExpectedRateOfReturn(newExpectedRateOfReturnValue);
  };

  const handleStartSipDelaySliderChange = (event, newStartSipDelayValue) => {
    setStartSipDelay(newStartSipDelayValue);
  };

  const handleMonthlyInvestmentChange = (event) => {
    setMonthlyInvestment(
      event.target.value === "" ? "" : Number(event.target.value)
    );
  };

  const handleInvestmentPeriodChange = (event) => {
    setInvestmentPeriod(
      event.target.value === "" ? "" : Number(event.target.value)
    );
  };

  const handleExpectedRateOfReturnChange = (event) => {
    setExpectedRateOfReturn(
      event.target.value === "" ? "" : Number(event.target.value)
    );
  };

  const handleStartSipDelayChange = (event) => {
    setStartSipDelay(
      event.target.value === "" ? "" : Number(event.target.value)
    );
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
  const handleStartSipDelayBlur = () => {
    if (startSipDelayValue < 0) {
      setStartSipDelay(1);
    } else if (startSipDelayValue > 120) {
      setStartSipDelay(120);
    }
  };

  // let navigate = useNavigate();
  // const Button = () => (
  //   <button
  //     type="button"
  //     onClick={() => {
  //       let r = expectedRateOfReturnValue;
  //       let p = monthlyInvestmentValue;
  //       let n = investmentPeriodValue * 12;
  //       // let i = r/100/12;
  //       // console.log(Math.floor(p*((1+i)^(n-1))*(1+i)/i));
  //       let res = Math.floor(p * (1 + r / 100) * n);
  //       navigate("/result", { result: res });
  //     }}
  //   >
  //     Calculate
  //   </button>
  // );
  const btnStyle = {
    marginTop: "1rem",
    fontSize: "1em",
    padding: "0.7rem 1.7rem",
    fontWeight: "500",
    textAlign: "center",
    textTransform: "uppercase",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "3px solid #00d7c3",
    borderRadius: "50px",
    transition: "all .15s ease-in-out",
    color: "00d7c3",
    textColor: "red",
  };

  const [isSlider, setIsSlider] = useState(true);
  
  function changeState() {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({monthlyInvestment: monthlyInvestmentValue, investmentPeriod: investmentPeriodValue, rateOfReturn: expectedRateOfReturnValue, delay: startSipDelayValue}),
    };
    fetch('http://127.0.0.1:3000/sipDelayCalculator', requestOptions)
      .then(response => response.json())
      .then(data => {
        setApiData(data);
        setIsSlider(false);
      });
    
  }

  return (
    <>
      {isSlider === true && (
        <div>
          <Box sx={{ width: 800, marginLeft: 50, marginRight: 50 }}>
            <br></br>
            <Typography id="input-slider" gutterBottom>
              Monthly Investment (Rs.)
            </Typography>
            <br></br>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs>
                <Slider
                  value={
                    typeof monthlyInvestmentValue === "number"
                      ? monthlyInvestmentValue
                      : 0
                  }
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
                    type: "number",
                    "aria-labelledby": "input-slider",
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ width: 800, marginLeft: 50, marginRight: 50 }}>
            <br></br>
            <Typography id="input-slider" gutterBottom>
              Investment Period (in years)
            </Typography>
            <br></br>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs>
                <Slider
                  value={
                    typeof investmentPeriodValue === "number"
                      ? investmentPeriodValue
                      : 0
                  }
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
                    type: "number",
                    "aria-labelledby": "input-slider",
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ width: 800, marginLeft: 50, marginRight: 50 }}>
            <br></br>
            <Typography id="input-slider" gutterBottom>
              Expected Rate Of Return (% p.a)
            </Typography>
            <br></br>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs>
                <Slider
                  value={
                    typeof expectedRateOfReturnValue === "number"
                      ? expectedRateOfReturnValue
                      : 0
                  }
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
                    type: "number",
                    "aria-labelledby": "input-slider",
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ width: 800, marginLeft: 50, marginRight: 50 }}>
            <br></br>
            <Typography id="input-slider" gutterBottom>
              Delay in Starting SIP (in months)
            </Typography>
            <br></br>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs>
                <Slider
                  value={
                    typeof startSipDelayValue === "number"
                      ? startSipDelayValue
                      : 0
                  }
                  onChange={handleStartSipDelaySliderChange}
                  aria-label="Delay in Starting SIP"
                  // marks={true}
                  marks={startSipDelayMarks}
                  getAriaValueText={startSipDelayText}
                  // step={0.1}
                  valueLabelDisplay="auto"
                  min={1}
                  max={120}
                />
              </Grid>
              <Grid item>
                <Input
                  value={startSipDelayValue}
                  onChange={handleStartSipDelayChange}
                  onBlur={handleStartSipDelayBlur}
                  inputProps={{
                    // step: 0.1,
                    min: 1,
                    max: 120,
                    type: "number",
                    "aria-labelledby": "input-slider",
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          {/* calculate button */}
          <div
            className="calculate-btn"
            style={{ marginLeft: "25rem", marginTop: "2rem" }}
          >
            <button type="button" style={btnStyle} onClick={changeState}>
              calculate
            </button>
          </div>
        </div>
      )}

      {isSlider === false && (
        <div>
          <Graph delayMonths={apiData['delayMonths']} lossFromDelay={apiData['lossFromDelay']} graphData={apiData['graph']}/>
        </div>
      )}
    </>
  );
}
