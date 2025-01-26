import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  // Other properties in your JWT payload
  role: string; 
}

export const verifyToken = (token: string) : JwtPayload | null => {
  return jwtDecode(token);
};