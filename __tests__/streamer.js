/* globals test:true,expect:true */
import Streamer from '../lib/streamer';

test('fromAccess should resolve correctly.', (done) => {
    expect.assertions(2);
    const notfound$ = Streamer.fromAccess('./unexisteng-file');
    const found$ = Streamer.fromAccess(__filename);
    Streamer
        .combineLatest(notfound$, found$)
        .subscribe(
            ([notfound, found]) => {
                expect(notfound).toBe(false);
                expect(found).toBe(__filename);
            },
            error => done.fail(error.message || error),
            done,
        );
});
