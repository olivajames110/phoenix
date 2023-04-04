export const parseSSN = (value) => {
  let val = value.replace(/\D/g, "");
  val = val.replace(/^(\d{3})/, "$1-");
  val = val.replace(/-(\d{2})/, "-$1-");
  val = val.replace(/(\d)-(\d{4}).*/, "$1-$2");
  return val;
};
