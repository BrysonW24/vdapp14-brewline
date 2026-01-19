import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Tier = 'Bronze' | 'Gold' | 'Black';

type LoyaltyState = {
  points: number;
  tier: Tier;
  nextRewardAt: number;
};

const getTier = (points: number): Tier => {
  if (points >= 250) return 'Black';
  if (points >= 100) return 'Gold';
  return 'Bronze';
};

const initialState: LoyaltyState = {
  points: 120,
  tier: 'Gold',
  nextRewardAt: 150,
};

const loyaltySlice = createSlice({
  name: 'loyalty',
  initialState,
  reducers: {
    earnPoints(state, action: PayloadAction<number>) {
      state.points += action.payload;
      state.tier = getTier(state.points);
    },
    redeemReward(state, action: PayloadAction<number>) {
      if (state.points < action.payload) return;
      state.points -= action.payload;
      state.tier = getTier(state.points);
    },
    setNextReward(state, action: PayloadAction<number>) {
      state.nextRewardAt = action.payload;
    },
  },
});

export const { earnPoints, redeemReward, setNextReward } = loyaltySlice.actions;
export default loyaltySlice.reducer;
