import { TRNAgentAbilities, TRNAgentName, TRNAgentRole } from "../agent";
import { TRNPlaylist } from "../common";

export interface TRNSegmentMetaData {
  name        : TRNPlaylist | TRNAgentName,
  imageUrl?   : string,
  role?       : TRNAgentRole,
  color?      : string,
  abilities?  : TRNAgentAbilities,
  matchCount? : number,
}




