import "./App.css";
import { Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { useState } from "react";

function App() {
  const [blueTokenData, setBlueTokenData] = useState({
    numberOfBlueToken: null,
    blueTokenPrefix: "",
    blueTokenPerRow: null,
  });

  const [redTokenData, setRedTokenData] = useState({
    numberOfRedToken: null,
    redTokenPrefix: "",
    redTokenPerRow: null,
  });

  const [showTokens, setShowTokens] = useState(false);
  const [blueTokenWidth, setBlueTokenWidth] = useState(0);
  const [redTokenWidth, setRedTokenWidth] = useState(0);

  // handling blue token input
  const handleBlueInputChange = (e) => {
    const { name, value } = e.target;
    setBlueTokenData({ ...blueTokenData, [name]: value });
  };

  // handling red token input
  const handleRedInputChange = (e) => {
    const { name, value } = e.target;
    setRedTokenData({ ...redTokenData, [name]: value });
  };

  // handle clear input boxws
  const handleClearInput = () => {
    setBlueTokenData({
      numberOfBlueToken: 0,
      blueTokenPrefix: "",
      blueTokenPerRow: 0,
    });
    setRedTokenData({
      numberOfRedToken: 0,
      redTokenPrefix: "",
      redTokenPerRow: 0,
    });
    setShowTokens(false);
  };

  // handle generate tokens data
  const handleGenerateTokens = () => {
    setShowTokens(true);
    setBlueTokenWidth(blueTokenData.blueTokenPerRow * 130);
    setRedTokenWidth(redTokenData.redTokenPerRow * 130);
  };
  //looping and creating array of json for blue token
  const blueTokensArray = [];
  for (let i = 0; i < blueTokenData.numberOfBlueToken; i++) {
    const blueToken = {
      id: i + 1,
      prefix: blueTokenData.blueTokenPrefix,
      numberRow: blueTokenData.blueTokenPerRow,
    };
    blueTokensArray.push(blueToken);
  }

  //looping and creating array of json for red token
  const redTokensArray = [];
  for (let i = 0; i < redTokenData.numberOfRedToken; i++) {
    const redToken = {
      id: i + 1,
      prefix: redTokenData.redTokenPrefix,
      numberRow: redTokenData.redTokenPerRow,
    };
    redTokensArray.push(redToken);
  }

  return (
    <Stack direction="column" alignItems="center" spacing={6}>
      {/* header */}
      <Stack
        sx={{
          background: "linear-gradient(to left,#d32f2f ,#1565c0)",
          width: "100%",
          color: "white",
          fontSize: "30px",
          letterSpacing: "6px",
        }}
        justifyContent="center"
        alignItems="center"
      >
        <p>Token Generator Application</p>
      </Stack>

      {/* input container */}
      <Stack direction="column" spacing={4} sx={{ width: "400px" }}>
        {/* input group 1 */}
        <Stack direction="column" spacing={2}>
          <TextField
            id="outlined-basic"
            label="No. of blue tokens"
            variant="outlined"
            size="small"
            type="number"
            name="numberOfBlueToken"
            value={blueTokenData.numberOfBlueToken}
            onChange={(e) => handleBlueInputChange(e)}
          />
          <TextField
            id="outlined-basic"
            label="Blue token prefix"
            variant="outlined"
            size="small"
            type="text"
            name="blueTokenPrefix"
            value={blueTokenData.blueTokenPrefix}
            onChange={(e) => handleBlueInputChange(e)}
          />
          <TextField
            id="outlined-basic"
            label="Blue token per row"
            variant="outlined"
            size="small"
            type="number"
            name="blueTokenPerRow"
            value={blueTokenData.blueTokenPerRow}
            onChange={(e) => handleBlueInputChange(e)}
          />
        </Stack>

        {/* input group 2 */}
        <Stack direction="column" spacing={2}>
          <TextField
            id="outlined-basic"
            label="No. of red tokens"
            variant="outlined"
            size="small"
            type="number"
            name="numberOfRedToken"
            value={redTokenData.numberOfRedToken}
            onChange={(e) => handleRedInputChange(e)}
          />
          <TextField
            id="outlined-basic"
            label="Red token prefix"
            variant="outlined"
            size="small"
            type="text"
            name="redTokenPrefix"
            value={redTokenData.redTokenPrefix}
            onChange={(e) => handleRedInputChange(e)}
          />
          <TextField
            id="outlined-basic"
            label="Red token per row"
            variant="outlined"
            size="small"
            type="number"
            name="redTokenPerRow"
            value={redTokenData.redTokenPerRow}
            onChange={(e) => handleRedInputChange(e)}
          />
        </Stack>

        {/* button group */}
        <Stack direction="row" justifyContent="space-between">
          <Button variant="contained" onClick={handleGenerateTokens}>
            Generate
          </Button>
          <Button variant="outlined" color="error" onClick={handleClearInput}>
            Clear
          </Button>
        </Stack>
      </Stack>

      {/* tokens container */}
      {showTokens ? (
        <Stack direction="column" sx={{ width: "auto" }}>
          {/* blue tokens container */}
          <Stack
            sx={{ flexWrap: "wrap", width: `${blueTokenWidth}px` }}
            direction="row"
          >
            {blueTokensArray.map((item) => {
              return (
                <Card
                  key={item.id}
                  sx={{
                    fontSize: 18,
                    width: 100,
                    height: 100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#1565c0",
                    color: "white",
                    margin: "10px",
                  }}
                  variant="outlined"
                >
                  {item.prefix} {item.id}
                </Card>
              );
            })}
          </Stack>

          {/* red tokens container */}
          <Stack
            sx={{
              flexWrap: "wrap",
              marginBottom: "50px",
              width: `${redTokenWidth}px`,
            }}
            direction="row"
          >
            {redTokensArray.map((item) => {
              return (
                <Card
                  key={item.id}
                  sx={{
                    fontSize: 18,
                    width: 100,
                    height: 100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#d32f2f",
                    color: "white",
                    margin: "10px",
                  }}
                  variant="outlined"
                >
                  {item.prefix} {item.id}
                </Card>
              );
            })}
          </Stack>
        </Stack>
      ) : null}
    </Stack>
  );
}

export default App;
