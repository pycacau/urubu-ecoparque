/**
 * Helper functions para trabalhar com a API do Instagram
 */

export interface InstagramTokenInfo {
  token: string;
  expiresAt?: number;
  tokenType: 'short' | 'long';
}

/**
 * Valida se um token do Instagram está no formato correto
 */
export const validateInstagramToken = (token: string | undefined): boolean => {
  if (!token) return false;
  // Tokens do Instagram geralmente começam com números e têm um formato específico
  return token.length > 50 && /^[0-9]/.test(token);
};

/**
 * Verifica se um token expirou (se tiver informação de expiração)
 */
export const isTokenExpired = (expiresAt?: number): boolean => {
  if (!expiresAt) return false;
  return Date.now() >= expiresAt * 1000;
};

/**
 * Formata a data de expiração do token
 */
export const formatTokenExpiration = (expiresIn: number): Date => {
  return new Date(Date.now() + expiresIn * 1000);
};

/**
 * Troca um token de curta duração por um de longa duração
 */
export const exchangeShortLivedToken = async (
  shortLivedToken: string,
  clientSecret: string
): Promise<{ access_token: string; token_type: string; expires_in: number }> => {
  const response = await fetch(
    `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${clientSecret}&access_token=${shortLivedToken}`
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Erro ao trocar token');
  }

  return response.json();
};

/**
 * Renova um token de longa duração que está próximo de expirar
 */
export const refreshLongLivedToken = async (
  longLivedToken: string
): Promise<{ access_token: string; token_type: string; expires_in: number }> => {
  const response = await fetch(
    `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${longLivedToken}`
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Erro ao renovar token');
  }

  return response.json();
};

/**
 * Testa se um token está funcionando
 */
export const testInstagramToken = async (token: string): Promise<boolean> => {
  try {
    const response = await fetch(
      `https://graph.instagram.com/me?fields=id,username&access_token=${token}`
    );
    return response.ok;
  } catch {
    return false;
  }
};

