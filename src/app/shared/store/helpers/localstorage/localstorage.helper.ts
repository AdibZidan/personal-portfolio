import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppState } from '@shared/store/interfaces/app-state.interface';
import { tasksReducer } from '@shared/store/reducers/task/task.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';

export const REDUCERS: ActionReducerMap<AppState> = {
  tasks: tasksReducer
};

function localStorageSyncReducer(
  actionReducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return localStorageSync({
    keys: Object.keys(REDUCERS),
    rehydrate: true
  })(actionReducer);
}

export const META_REDUCERS: MetaReducer<AppState, Action>[] = [localStorageSyncReducer];
