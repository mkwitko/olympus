export interface TournamentInt {
  name?: string;

  logo?: string;
  banner?: string;

  dates?: Date[];
  hour?: number[];

  prize?: number[];
  participantsToPrize?: number;
  achievements?: string[];

  olympusType?: boolean;

  groupsQuantity?: number;
  userPerGroup?: number;
  totalUsers?: number;

  semiFinal?: boolean;
  final?: boolean;

  teams?: string[];

  id?: string;
  creatorId?: string;
  createdAt?: number;
}
