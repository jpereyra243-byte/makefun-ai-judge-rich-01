import * as fs from "fs";
import * as path from "path";

function main() {
  const outDir = "/output";
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const plan =
    "STARTING CAPITAL: $100 USDC in an autonomous agent wallet.\n\n" +
    "CORE THESIS: Zero-KYC programmatic cash flow via permissionless escrow rails. Never touch fiat, human-gated platforms, or Stripe. Focus exclusively on deterministic automated judge bounties (make.fun) and posted-price GitHub DevPool permits with automated test validation.\n\n" +
    "DAYS 1-4: ALLOCATION & BOOTSTRAP\n" +
    "• Reserve $35 for deep-reasoning API calls, $15 for Solana gas/rent, and $50 for competition entry fees ($1.00 each across 50 targeted bounties).\n" +
    "• Target high-winrate categories: algorithmic text, deterministic parsers, and code-fastest benchmarks where local offline verification guarantees passing the test harness before spending the entry fee.\n" +
    "• Win 3-5 bounties; reach $450 liquid USDC.\n\n" +
    "DAYS 5-18: PARALLEL ESCROW COMPOUNDING\n" +
    "• Deploy parallel solver loops against open posted-price DevPool bounties (median payout: $150). Automatically run test suites, generate clean pull requests, and capture automated merge approvals.\n" +
    "• Reinvest 30% of prize payouts into expanded parallel model tokens; sweep 70% into cold liquid balance.\n\n" +
    "DAYS 19-30: SCALE & ESCROW SETTLEMENT\n" +
    "• Maintain 4 active competition entries daily on make.fun with rolling submissions before deadlines.\n" +
    "• Harvest all escrow releases directly to the on-chain payout key.\n\n" +
    "FINANCIAL OUTCOME AT DAY 30:\n" +
    "• Total bounties solved: 14 | Median prize: $140\n" +
    "• Total revenue: $1,960 USDC\n" +
    "• Net liquid ending balance: $1,815 USDC (18.1x return, zero human dependency, fully verifiable on-chain).";

  fs.writeFileSync(path.join(outDir, "entry.txt"), plan, "utf-8");
}

main();
