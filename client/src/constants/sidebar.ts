import { ROUTES } from './routes';

export interface SidebarItem {
  label: string;
  path: string;
}

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { label: 'Dashboard', path: ROUTES.DASHBOARD },
  { label: 'Applications', path: ROUTES.APPLICATIONS },
  { label: 'Projects', path: ROUTES.PROJECTS },
  { label: 'Resume', path: ROUTES.RESUME },
  { label: 'Analytics', path: ROUTES.ANALYTICS },
  { label: 'Interviews', path: ROUTES.INTERVIEWS },
  { label: 'Learning', path: ROUTES.LEARNING },
  { label: 'Profile', path: ROUTES.PROFILE },
  { label: 'Settings', path: ROUTES.SETTINGS },
];
