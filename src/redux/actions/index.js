import { increment, decrement, reset } from './counter';
import { login, logout } from './session';

export { login as sessionLogin, logout as sessionLogout };
export { increment as counterIncrement, decrement as counterDecrement, reset as counterReset };
