import Test from 'ava';
import Streamer from '../lib/streamer';

Test.cb('fromAccess should resolve correctly.', (test) => {
    test.plan(2);
    const notfound$ = Streamer.fromAccess('./unexisteng-file');
    const found$ = Streamer.fromAccess(__filename);
    Streamer
        .combineLatest(notfound$, found$)
        .subscribe(
            ([notfound, found]) => {
                test.is(notfound, false);
                test.is(found, __filename);
            },
            error => test.fail(error.message || error),
            test.end,
        );
});
