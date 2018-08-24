export class CommonRegex {
  public static EMAIL_ADDRESS_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public static ALPHABETICS_REGEXP = '^[a-zA-Z]*$';
  public static NUMERIC_REGEXP = '^[0-9]*$';
  public static ALPHA_NUMERIC_REGEXP = '^[A-Za-z0-9]*$';
  public static ALPHABETICS_REGEXP_WITH_SPACE = '^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$';
}
