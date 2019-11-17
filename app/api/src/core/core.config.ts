export class CoreConfig {
  static production = process.env.NODE_ENV === 'production';
  static jwtSecret = 'secretKey';
  static bcryptSaltRounds = 10;
  static kin = {
    channelsBaseSeed: 'SDWULGRKZ56MYKWA5ACDA7LVRPJSTD26U4REHGN4OVRLNYQM5K53V2NE',
    channelsSalt: 'THIS_IS_A_SECRET',
    channelsCount: 10,
    channelsStartingBalance: 100,
  };
  static redis = {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT, 10) || 6379,
  };
}
