import { TRNStats } from "./trn-stats.type";

export interface TRNPlaylistStats {

  ability1Casts?         : TRNStats,
  ability2Casts?         : TRNStats,
  ability1Kills?         : TRNStats,
  ability1CastsPerMatch? : TRNStats,
  ability1CastsPerRound? : TRNStats,
  ability1KillsPerMatch? : TRNStats,
  ability2Kills?         : TRNStats,
  ability2CastsPerMatch? : TRNStats,
  ability2CastsPerRound? : TRNStats,
  ability2KillsPerMatch? : TRNStats,

  aces?                  : TRNStats,

  assists?               : TRNStats,
  assistsPerMatch?       : TRNStats,
  assistsPerRound?       : TRNStats,
  assistsPerMinute?      : TRNStats,

  attackKDRatio?         : TRNStats,
  attackKills?           : TRNStats,
  attackDeaths?          : TRNStats,
  attackAssists?         : TRNStats,
  attackRoundsPlayed?    : TRNStats,
  attackRoundsWon?       : TRNStats,
  attackRoundsLost?      : TRNStats,
  attackRoundsWinPct?    : TRNStats,

  clutches?              : TRNStats,

  damage?                : TRNStats,
  damagePerMatch?        : TRNStats,
  damagePerRound?        : TRNStats,
  damagePerMinute?       : TRNStats,
  damageReceived?        : TRNStats,

  dealtHeadshots?        : TRNStats,
  dealtBodyshots?        : TRNStats,
  dealtLegshots?         : TRNStats,

  deaths?                : TRNStats,
  deathsPerRound?        : TRNStats,
  deathsPerMatch?        : TRNStats,
  deathsPerMinute?       : TRNStats,

  deathsFirst?           : TRNStats,
  deathsLast?            : TRNStats,

  defenseKDRatio?        : TRNStats,
  defenseKills?          : TRNStats,
  defenseDeaths?         : TRNStats,
  defenseAssists?        : TRNStats,
  defenseRoundsPlayed?   : TRNStats,
  defenseRoundsWon?      : TRNStats,
  defenseRoundsLost?     : TRNStats,
  defenseRoundsWinPct?   : TRNStats,

  defuses?               : TRNStats,
  defusesPerMatch?       : TRNStats,
  defusesPerRound?       : TRNStats,

  econRating?            : TRNStats,
  econRatingPerMatch?    : TRNStats,
  econRatingPerRound?    : TRNStats,

  firstBloods?           : TRNStats,
  firstBloodsPerMatch?   : TRNStats,

  flawless?              : TRNStats,

  grenadeCasts?          : TRNStats,
  grenadeKills?          : TRNStats,
  grenadeKillsPerMatch?  : TRNStats,
  grenadeCastsPerMatch?  : TRNStats,
  grenadeCastsPerRound?  : TRNStats,

  headshots?             : TRNStats,
  headshotsPerRound?     : TRNStats,
  headshotsPerMatch?     : TRNStats,
  headshotsPerMinute?    : TRNStats,
  headshotsPercentage?   : TRNStats,

  kDRatio?               : TRNStats,
  kDARatio?              : TRNStats,
  kADRatio?              : TRNStats,

  kills?                 : TRNStats,
  killsPerRound?         : TRNStats,
  killsPerMatch?         : TRNStats,
  killsPerMinute?        : TRNStats,

  matchesPlayed?         : TRNStats,
  matchesWon?            : TRNStats,
  matchesLost?           : TRNStats,
  matchesWinPct?         : TRNStats,
  matchesDuration?       : TRNStats,

  mostKillsInMatch?      : TRNStats,
  mostKillsInRound?      : TRNStats,

  peakRank?              : TRNStats,
  plants?                : TRNStats,
  plantsPerMatch?        : TRNStats,
  plantsPerRound?        : TRNStats,

  rank?                  : TRNStats,
  receivedHeadshots?     : TRNStats,
  receivedBodyshots?     : TRNStats,
  receivedLegshots?      : TRNStats,

  roundsPlayed?          : TRNStats,
  roundsWon?             : TRNStats,
  roundsLost?            : TRNStats,
  roundsWinPct?          : TRNStats,
  roundsDuration?        : TRNStats,

  score?                 : TRNStats,
  scorePerMatch?         : TRNStats,
  scorePerRound?         : TRNStats,

  thrifty?               : TRNStats,
  teamAces?              : TRNStats,
  timePlayed?            : TRNStats,

  ultimateCasts?         : TRNStats,
  ultimateCastsPerMatch? : TRNStats,
  ultimateCastsPerRound? : TRNStats,
  ultimateKills?         : TRNStats,
  ultimateKillsPerMatch? : TRNStats,

}
