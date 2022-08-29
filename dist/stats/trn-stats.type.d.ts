import { TRNRankTier } from "../tier";
export interface TRNStats {
    rank?: string;
    percentile?: number;
    displayName?: string;
    displayCategory?: string;
    category?: string;
    metadata?: TRNStatsMetadata;
    value?: number;
    displayValue?: string;
    displayType?: string;
}
export interface TRNStatsMetadata {
    actId?: string;
    actName?: string;
    iconUrl?: string;
    tierName?: TRNRankTier;
}
