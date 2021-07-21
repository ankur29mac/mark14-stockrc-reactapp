import styled from "styled-components";

const InputContainer = ({
  enteredData,
  handleOnChange,
  setLoss,
  setProfit,
}) => {
  const handleOnsubmit = e => {
    e.preventDefault();

    // Processing
    const CP = Number(enteredData.currentPrice);
    const PP = Number(enteredData.purchasePrice);
    const QTY = Number(enteredData.stockQuantity);

    if (CP - PP > 0) {
      setProfit({
        isAtProfit: true,
        profitValue: ((CP - PP) * QTY).toFixed(2),
        profitPercentage: (((CP - PP) / PP) * 100).toFixed(2),
      });
    } else if (CP - PP < 0) {
      setLoss({
        isAtLoss: true,
        lossValue: ((CP - PP) * QTY).toFixed(2),
        lossPercentage: (((CP - PP) / PP) * 100).toFixed(2),
      });
    } else {
      alert("");
    }
  };

  return (
    <Container>
      <FormContainer>
        <form onSubmit={handleOnsubmit}>
          <FormControl>
            <input
              type="number"
              name="purchasePrice"
              id="purchasePrice"
              value={enteredData.purchasePrice}
              min={1}
              step={0.1}
              onChange={handleOnChange}
              required
            />
            <label htmlFor="purchasePrice">Purchase Price</label>
          </FormControl>
          <FormControl>
            <input
              type="number"
              name="stockQuantity"
              id="stockQuantity"
              value={enteredData.stockQuantity}
              min={1}
              onChange={handleOnChange}
              required
            />
            <label htmlFor="stockQuantity">Stock Quantity</label>
          </FormControl>
          <FormControl>
            <input
              type="number"
              name="currentPrice"
              id="currentPrice"
              min={0}
              step={0.1}
              value={enteredData.currentPrice}
              onChange={handleOnChange}
              required
            />
            <label htmlFor="currentPrice" className="third-label">
              Current Price
            </label>
          </FormControl>
          <button type="submit">check now</button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default InputContainer;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.div`
  flex: 0.4 0 36vw;
  padding: 5rem 1rem;
  display: flex;
  align-items: center;
  background-color: #fff;
`;

const FormContainer = styled.div`
  padding-left: 1rem;

  button {
    padding: 0.7rem 0.5rem;
    width: 40%;
    cursor: pointer;
    border-radius: 3px;
    background: #fff;
    border: 1px solid rgb(108, 99, 255);
    transition: all 0.3s ease;
    font-weight: bold;
    &:hover {
      background-color: rgb(108, 99, 255);
      color: #fff;
    }
  }
`;

const FormControl = styled.div`
  /* border: 1px solid red; */
  width: 30vw;
  padding: 0rem 0rem 1.5rem 0rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  label {
    font-size: 1.2rem;
  }

  .third-label {
    margin-right: 0.7rem;
  }

  input {
    font-size: 2rem;
    color: rgb(108, 99, 255);
    padding: 0.7rem 0.5rem;
    width: 70%;
    border: none;
    border-bottom: 1px solid rgb(108, 99, 255);

    &:focus {
      border: none;
      outline: none;
      border-bottom: 1px solid rgb(108, 99, 255);
    }
  }
`;
