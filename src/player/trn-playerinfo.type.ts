export interface TRNPlayerInfo {
  userId          : string,
  isPremium       : boolean,
  isVerified      : boolean,
  isInfluencer    : boolean,
  isPartner       : boolean,
  countryCode     : string,
  customAvatarUrl : string,
  customHeroUrl   : string,
  socialAccounts  : any[],
  pageviews       : number,
  isSuspicious    : boolean
}
