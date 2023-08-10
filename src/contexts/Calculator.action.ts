export interface Action {
  type: string;
  payload: number | null;
}

export const createAction = (type: string, payload?: number): Action => ({
  type,
  payload: payload !== undefined ? payload : 0,
});
