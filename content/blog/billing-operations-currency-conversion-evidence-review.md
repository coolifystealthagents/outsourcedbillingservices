# Currency Conversion Evidence Review for Billing Teams

Foreign-currency billing problems rarely begin with difficult arithmetic. They begin when a number loses its context. A billing record may show an exchange rate without saying who selected it, which currencies it connects, what time it applies to, whether the source quotes the pair directly or inversely, or how rounding should work. Recalculating the same multiplication does not answer those questions.

A currency conversion evidence review helps a billing team reproduce an authorized calculation and expose any missing decision. It does not choose the exchange-rate policy, interpret a contract, determine tax treatment, or decide how a foreign-currency amount should be recorded in financial statements.

## Name the four amounts before checking the math

For each converted charge, identify the transaction amount and currency, the billing amount and currency, the rate, and the resulting converted amount. If a settlement or ledger amount uses a third currency, record that as another event instead of blending it into the invoice conversion.

Use ISO currency codes rather than symbols. A dollar sign can refer to several currencies, and a spreadsheet column labeled “local” becomes ambiguous when teams operate across entities. Preserve the precision stored by the source system even if the customer-facing document displays fewer decimal places.

The rate needs its own identity: source publisher or system, rate type, currency pair, quote direction, effective date and time, timezone, retrieval time, precision, and approval or policy reference. “Rate = 1.08” is incomplete. A reviewer must know whether it means 1 EUR equals 1.08 USD or the inverse, and whether the approved operation multiplies or divides.

## Distinguish policy from retrieval

The client’s qualified owner decides which rate is appropriate. Depending on the arrangement, that might be a contract-stated rate, an official reference rate for a stated date, a processor rate, a bank rate, a monthly corporate rate, or another approved source. Billing operations can retrieve that source and reproduce the documented rule, but should not substitute a rate because it appears more current or favorable.

Create a short rate instruction that can be executed consistently. It should say which event determines the date, what happens on weekends or holidays, which timezone controls the cutoff, whether a direct or inverse quote is used, the precision retained during calculation, and when rounding occurs. If any of these points is missing and could change the invoice, route the gap to the owner.

Do not use a search-engine snippet or unsourced converter as evidence. Preserve the approved source response or protected locator, query parameters, and retrieval timestamp. When an API supplies multiple fields, identify the exact field selected. When a table supplies daily rates, retain the relevant row and table version.

## Walk through a conversion without hiding uncertainty

Consider an approved service charge of EUR 18,750 that must be invoiced in USD. The client instruction calls for a named daily reference rate on the service-completion date, retaining six decimals and rounding the final invoice line to two. The completion timestamp is 23:30 in New York, while the rate table publishes dates in Central European time.

The arithmetic cannot begin safely until the owner’s rule resolves which calendar date applies. Billing operations records both timestamps, the timezone conflict, the two candidate rate rows, and the dollar difference each would produce. It asks the owner a narrow question about the intended date boundary. Once answered, the team stores the decision reference, selected row, quote direction, unrounded calculation, rounded result, and invoice line.

That packet is better than silently choosing the date nearest the operator’s location. It also avoids presenting the owner with a vague request to “confirm FX.” The unresolved issue is isolated, and all remaining calculation steps are ready to execute.

## Test direction and unit explicitly

Direction errors can produce plausible-looking numbers when currencies are near parity. Write the equation in units. If the source says USD per EUR, then EUR multiplied by USD/EUR produces USD. If it says EUR per USD, the approved calculation may require division. The unit notation shows why.

Add reasonableness ranges only as exception flags, not as alternate rate policy. Comparing the result with a nearby public reference can reveal a likely inverse quote or decimal error. It cannot authorize replacement of the approved source. Record the discrepancy and return to the rate instruction.

For batch work, test a small set independently: the largest amount, a negative line, a zero amount, a rate near one, a rate with many decimals, and a record around the cutoff. Negative credits deserve special attention because some systems apply rounding or quote direction differently when a sign changes.

## Control rounding as part of the calculation

Rounding differences accumulate when a system converts each line while another converts the invoice total. Neither method is automatically correct. The approved instruction must state the calculation level and rounding sequence.

Keep an unrounded value beside the displayed value. For line-level conversion, reconcile the sum of rounded lines to the invoice total and identify any authorized rounding line separately. Never bury a difference by changing one service line until totals agree. For total-level conversion, retain the original-currency component schedule so the resulting invoice remains traceable.

Suppose three EUR lines convert to USD values with fractions of a cent. Rounding each line may produce a total one cent different from rounding the aggregate. The evidence packet should display both methods, cite the approved one, and show any explicit rounding adjustment. The operator should not choose whichever produces the higher charge.

## Separate invoice conversion from cash settlement

A customer may pay a converted invoice from an account in another currency. The bank or processor can apply a different rate and a fee. That settlement does not retroactively change the invoice rate unless an approved policy says so.

Record the invoice conversion, payment instruction, bank receipt, processor conversion, fee, and ledger application as separate linked events. This distinction matters when a customer disputes the amount or when cash received differs from the invoiced balance. Billing support can reconcile the events while finance determines any gain, loss, fee, or accounting treatment.

The same separation applies to refunds and credit memos. A refund-day rate may differ from the original invoice rate. Operations should not assume that the original converted amount, current spot equivalent, or processor payout is the authorized refund. Present the alternatives and source evidence to the decision owner.

## Reconcile a conversion population

For a billing run, group records into approved conversion completed, no conversion required, missing source rate, date-rule conflict, direction conflict, precision or rounding exception, currency mismatch, owner review, system failure, and unresolved. The source-currency population should equal the total of those states.

Recalculate converted values from preserved inputs rather than copying the system output into the check. Compare source amount, rate identity, direction, precision, rounding method, converted amount, invoice artifact, and downstream posting. A balanced batch total can conceal offsetting line errors, so investigate differences at the lowest meaningful level.

Useful measures include records lacking rate provenance, owner decisions needed, inverse-quote exceptions, cutoff conflicts, rounding adjustments, manual overrides, repeated retrieval failures, and differences between approved calculations and displayed documents. Report counts and value by currency pair; do not combine currencies into a meaningless grand total.

Teams that need a repeatable evidence trail between source charges and customer-facing amounts can explore our [billing reconciliation service](/services/billing-reconciliation) and [invoice preparation service](/services/invoice-preparation). The useful deliverable is not an unexplained converted number. It is a calculation another authorized reviewer can reproduce from the approved rule and preserved source.

## Authoritative references

- [Federal Reserve: Foreign Exchange Rates](https://www.federalreserve.gov/releases/h10/current/)
- [ISO 4217 currency code overview](https://www.iso.org/iso-4217-currency-codes.html)
- [NIST SP 800-53 Revision 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)
