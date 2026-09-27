export type Role = 'ADMIN' | 'ANALYST' | 'VIEWER';

export type Permission = 
  | 'view:dashboard'
  | 'view:transactions'
  | 'create:transaction'
  | 'export:data'
  | 'manage:users';

const PERMISSIONS_MATRIX: Record<Role, Permission[]> = {
  ADMIN: [
    'view:dashboard',
    'view:transactions',
    'create:transaction',
    'export:data',
    'manage:users',
  ],
  ANALYST: [
    'view:dashboard',
    'view:transactions',
    'create:transaction',
    'export:data',
  ],
  VIEWER: [
    'view:dashboard',
    'view:transactions',
  ],
};

export function can(role: Role, permission: Permission): boolean {
  return PERMISSIONS_MATRIX[role]?.includes(permission) || false;
}
