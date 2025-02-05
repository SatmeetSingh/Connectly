export const callback = (
  id: string,
  phase: 'mount' | 'update' | 'nested-update',
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number
) => {
  console.log(
    `Component ${id} took ${actualDuration}ms with baseDuration:${baseDuration}  to render.`
  );
};
