export const JWT_SECRET = process.env.JWT_SECRET || "jwtsecret";
export const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/paytm";
export const IS_PROD = process.env.NODE_ENV === "production"
