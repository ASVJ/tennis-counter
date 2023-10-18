interface INavContext {
  path: string;
}

enum ERoutes {
  HOME,
  MATCHS_CREATE,
  MATCHS_LIVE,
}

export const Routes: Record<keyof typeof ERoutes, INavContext> = {
  HOME: {
    path: "/",
  },
  MATCHS_CREATE: {
    path: "/matchs/create",
  },
  MATCHS_LIVE: {
    path: "/matchs/live",
  },
};
