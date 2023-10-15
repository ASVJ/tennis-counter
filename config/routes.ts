interface INavContext {
  path: string;
}

enum ERoutes {
  HOME,
}

export const Routes: Record<keyof typeof ERoutes, INavContext> = {
  HOME: {
    path: "/",
  },
};
