export const CAN_USE_DOM = typeof window !== "undefined";
export const CAN_USE_LOCAL_STORAGE = CAN_USE_DOM && typeof localStorage !== "undefined";