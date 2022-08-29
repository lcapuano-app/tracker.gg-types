import { TRNStats } from "./trn-stats.type";
export interface TRNRecentStats {
    headPct?: TRNStats;
    headHits?: TRNStats;
    bodyPct?: TRNStats;
    bodyHits?: TRNStats;
    legsPct?: TRNStats;
    legsHits?: TRNStats;
    matches?: TRNStats;
}
