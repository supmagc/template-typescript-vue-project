import test from 'ava';
import { getRandom } from '../src/utils/randomizer';

test('Randomizer test', t => {
    const tmp = getRandom();
    t.true(tmp >= 0);
    t.true(tmp <= new Date().getFullYear());
});
