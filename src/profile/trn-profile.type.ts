import { TRNMetaData } from "../common";
import { TRNPlatformInfo } from "../platform";
import { TRNPlayerInfo } from "../player";
import { TRNSegment } from "../segment";

export interface TRNProfile {
  platformInfo      : TRNPlatformInfo,
  userInfo          : TRNPlayerInfo,
  metadata          : TRNMetaData,
  segments          : TRNSegment[],
  availableSegments : any,
  expiryDate        : string,

  trackerProfile?   : string,
  riotId?           : string,
  date?             : string
}
