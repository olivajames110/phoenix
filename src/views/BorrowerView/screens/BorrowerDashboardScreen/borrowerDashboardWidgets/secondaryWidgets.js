import {
  AccountBalanceRounded,
  AccountBoxRounded,
  AttachMoney,
  CurrencyExchangeRounded,
  PersonSearchRounded,
  ReceiptLongRounded,
} from "@mui/icons-material";
import SecondaryCtaWidget from "../../../../../components/shared/Widgets/SecondaryCtaWidget";
import TickerWidget from "../../../../../components/shared/Widgets/TickerWidget";

const iconStyles = {
  height: "1.4rem",
  width: "1.4rem",
};

export const MoneyBorrowed = (props) => {
  return (
    <TickerWidget
      title="Amount Borrowed"
      value="$1,200,000"
      isValid={true}
      icon={<CurrencyExchangeRounded sx={iconStyles} />}
    />
  );
};

export const ActiveLoans = (props) => {
  return (
    <TickerWidget
      title="Active Loans"
      value="3"
      isValid={true}
      icon={<ReceiptLongRounded sx={iconStyles} />}
    />
  );
};

export const BankAccount = (props) => {
  const isValid = false;
  return (
    <SecondaryCtaWidget
      title="Bank Account Linked"
      onClick={props.onClick}
      isValid={isValid}
      label={isValid ? "Linked" : "Not Linked"}
      disabled={!props.ready}
      icon={<AccountBalanceRounded sx={iconStyles} />}
    />
  );
};

export const CreditAuthStatus = (props) => {
  return (
    <SecondaryCtaWidget
      title="Credit Auth Status"
      description="Example."
      isValid={true}
      label="Valid | Expires 3/11/23"
      onClick={props.onClick}
      icon={<PersonSearchRounded sx={iconStyles} />}
    />
  );
};

export const BorrowerProfile = (props) => {
  return (
    <SecondaryCtaWidget
      title="Profile Information"
      description="Example."
      isValid={true}
      label="Completed"
      onClick={props.onClick}
      icon={<AccountBoxRounded sx={iconStyles} />}
    />
  );
};
