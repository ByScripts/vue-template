export function setAuthenticationBearer(authenticationBearer) {
  localStorage.setItem('authentication-bearer', authenticationBearer);
}

export function getAuthenticationBearer() {
  return localStorage.getItem('authentication-bearer');
}

export function clearAuthenticationBearer() {
  localStorage.removeItem('authentication-bearer');
}

export function logout() {
  clearAuthenticationBearer();
}

export function isAuthenticated() {
  return null !== getAuthenticationBearer();
}

export function redirectToAuthentication() {
  window.location = '/login';
}
