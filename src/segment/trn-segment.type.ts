import { TRNPlaylist } from "../common"
import { TRNPlaylistStats, TRNRecentStats } from "../stats";
import { TRNSegmentMetaData } from "./trn-segment-meta-data.type";
import { TRNSegmentType } from "./trn-segment-type.type";

export interface TRNSegment {
  type       : TRNSegmentType,
  attributes : TRNSegmentAttr ,
  metadata   : TRNSegmentMetaData,
  expiryDate : string,
  stats      : TRNPlaylistStats | TRNRecentStats,
}

export interface TRNSegmentAttr {
  key?      : string,
  playlist? : TRNPlaylist,
  seasonId? : string
}
