import FS from 'fs';
import PATH from 'path';
import { spawn as SPAWN } from 'child_process';
import { Observable, Subject } from 'rxjs';
import Thrower from '@gik/tools-thrower';
import { Is } from '@gik/tools-checker';
import Logger from '@gik/tools-logger';
import { StreamParamError as ParamError } from './types';

const log = Logger();

/**
 * @module streamer
 * @memberof Tools
 * @description An utility belt for our most common operations with RXJS's Observables.
 *
 * @todo Add unit tests for all methods.
 */
export const $ = Observable;
export { Subject, Observable };

/**
 * @name fromAccess
 * @memberof Tools.streamer
 * @description Determine if given path is accessible.
 *
 * @param {string} path - A path to the node you want to check.
 * @returns {StreamBoolean} - Wether the file is accessible or not.
 */
export const $fromAccess = (path) => {
    if (!Is.string(path))
        Thrower([ParamError.message, 'path', 'string', typeof path], ParamError.name);
    log.debug('fromAccess->ini: %s', path);
    return $.bindNodeCallback(FS.access)(path)
        .mapTo(path)
        .catch(() => $.of(false))
        .do(x => log.debug('fromAccess->end: %s "%s"', path, x));
};

/**
 * @name fromStat
 * @memberof Tools.streamer
 * @description Determine statistics about a file system node.
 *
 * @param {string} path - A path to the node you want to check.
 * @returns {StreamStat} - stat object for the node.
 * @throws {Error} - When given an invalid node.
 */
export const $fromStat = (path) => {
    if (!Is.string(path))
        Thrower([ParamError.message, 'path', 'string', typeof path], ParamError.name);
    log.debug('$fromStat->ini "', path);
    return $.bindNodeCallback(FS.stat)(path)
        .do(stat => log.debug('$fromStat:end', path, stat));
};

export const $fromPath = (path) => {
    log.debug('$fromPath-> "%s"', path);
    return $fromStat(path);
};

/**
 * @name fromSpawn
 * @memberof Tools.streamer
 * @description Spawn a shell command.
 *
 * @param {string} command - The command you wish to spawn.
 * @param {Object} config - Configs sent to spawn command.
 * @returns {StreamOutput} - Each chunk of either stdout or stderr data.
 */
export const $fromSpawn = (command, config = {}) => {
    if (!Is.string(command)) {
        Thrower(
            [ParamError.message, 'command', '{string}', typeof command],
            ParamError.name,
        );
    }
    if (!Is.object(config)) {
        Thrower(
            [ParamError.message, 'config', '{Object}', typeof config],
            ParamError.name,
        );
    }
    log.debug('$fromSpawn->ini: "%s"', command);
    return $.create(function create(o) {
        const args = command.split(' ');
        const cmd = args.shift();
        const proc = SPAWN(cmd, args, Object.assign({
            cwd: undefined,
            env: process.env,
        }, config));
        proc.stdout.on('data', data => o.next({ type: 'stdout', data: data.toString() }));
        proc.stderr.on('data', data => o.next({ type: 'stderr', data: data.toString() }));
        proc.on('error', err => o.error(
            new Error(`Could not spawn command: "${command}" (${err.message})`),
        ));
        proc.on('close', function onClose(code) {
            o.next({ type: 'close', code });
            o.complete();
            log.debug('$fromSpawn->end: "%s"', command);
        });
    });
};

/**
 * @name fromDirMake
 * @memberof Tools.streamer
 * @description Creates a directory.
 *
 * @param {string} path - The directory to be created.
 * @returns {StreamString} - The path of the directory that was just created.
 * @throws {Error} - When directory cannot be created.
 */
export const $fromDirMake = (path) => {
    if (!Is.string(path))
        Thrower([ParamError.message, 'path', 'string', typeof path], ParamError.name);
    log.debug('$fromDirMake->ini: "%s"', path);
    return $.bindNodeCallback(FS.mkdir)(path)
        .mapTo(path)
        .do(() => log.debug('$fromDirMake->end: "%s"', path));
};

/**
 * @name fromDirRequire
 * @memberof Tools.streamer
 * @description Requires a directory path, if the directory does not exists, it's created.
 *
 * @param {string} dirpath - The requested directory.
 * @returns {StreamString[]} - The path of the directory.
 * @throws {Error} - When requested path exists and is not a directory.
 */
export const $fromDirRequire = (dirpath) => {
    if (!Is.string(dirpath))
        Thrower([ParamError.message, 'path', 'string', typeof dirpath], ParamError.name);
    const path = PATH.resolve(dirpath);
    log.debug('$fromDirRequire->ini: "%s"', path);
    return $
        .fromStat(path)
        // path was not found, create the directory
        .catch(() => $.fromDirMake(path).mergeMapTo($.fromStat(path)))
        // path exists and is not a directory? that's an error.
        .map(function isDir(stat) {
            if (!stat.isDirectory())
                Thrower(`Expecting "${path}" to be a directory.`);
            return path;
        })
        .do(() => log.debug('$fromDirRequire->end: "%s"', path));
};

/**
 * @name fromDirRead
 * @memberof Tools.streamer
 * @description Get path of nodes in given directory (non recursively).
 *
 * @param {string} path - The requested directory.
 * @returns {StreamDirNode[]} - The path of the directory.
 * @throws {Error} - When requested path exists and is not a directory.
 */
export const $fromDirRead = (path) => {
    if (!Is.string(path))
        Thrower([ParamError.message, 'path', 'string', typeof path], ParamError.name);
    log.debug('$fromDirRead->ini: "%s"', path);
    return $.bindNodeCallback(FS.readdir)(path)
        .do(nodes => log.debug('fromDirRead->end: "%s"', path, nodes))
        .concatMap(nodes => $.from(nodes))
        .map(node => PATH.join(path, node))
        .mergeMap(npath => $.fromStat(npath).map(stat => ({ stat, path: npath })));
};

/**
 * @name fromDirReadRecursive
 * @memberof Tools.streamer
 * @description Get path of nodes in given directory (recursively).
 *
 * @param {string} path - The requested directory.
 * @returns {StreamPath} - The path of the directory.
 * @throws {Error} - When requested path exists and is not a directory.
 */
export const $fromDirReadRecursive = (path) => {
    if (!Is.string(path))
        Thrower([ParamError.message, 'path', 'string', typeof path], ParamError.name);
    log.debug('$fromDirReadRecursive->ini: "%s"', path);
    return $
        .fromDirRead(path)
        .mergeMap(node => !node.stat.isDirectory() ?
            $.of(node) :
            $.fromDirReadRecursive(node.path),
        )
        .do(out => log.debug('$fromDirReadRecursive->end: "%s"', path, out));
};

/**
 * @name fromFileRead
 * @memberof Tools.streamer
 * @description Reads a file from the disk.
 *
 * @param {string} path - The path to the file to read.
 * @returns {Observable.<string>} - The contents of the file.
 */
export const $fromFileRead = (path) => {
    if (!Is.string(path))
        Thrower([ParamError.message, 'path', 'string', typeof path], ParamError.name);
    log.debug('$fromFileRead->ini: "%s"', path);
    return $
        .fromAccess(path)
        .map(function readAccess(access) {
            if (!access) Thrower(`Could not read ${path}`);
            return access;
        })
        .switchMapTo($.bindNodeCallback(FS.readFile)(path, 'utf-8'))
        .do(content => log.debug('$fromFileRead->end: "%s"', path, content));
};

/**
 * @name fromFileWrite
 * @memberof Tools.streamer
 * @description Writes a file on the disk.
 *
 * @param {string} path - The full path for the file.
 * @param {string} content - The contents of the file.
 * @returns {Observable.<string>} - The future value `true` if write was succesful.
 * @throws {Error} - When the file cannot be written.
 */
export const $fromFileWrite = (path, content) => {
    if (!Is.string(path))
        Thrower([ParamError.message, 'path', 'string', typeof path], ParamError.name);
    if (!Is.string(content))
        Thrower([ParamError.message, 'content', 'string', typeof content], ParamError.name);
    log.debug('$fromFileWrite->ini: "%s"', path);
    return $.bindNodeCallback(FS.writeFile)(path, content)
        .mapTo(true)
        .do(out => log.debug('$fromFileWrite->end: "%s"', path, out));
};

// make them available to default export.
$.fromFileWrite = $fromFileWrite;
$.fromFileRead = $fromFileRead;
$.fromDirReadRecursive = $fromDirReadRecursive;
$.fromDirRead = $fromDirRead;
$.fromDirRequire = $fromDirRequire;
$.fromDirMake = $fromDirMake;
$.fromSpawn = $fromSpawn;
$.fromPath = $fromPath;
$.fromStat = $fromStat;
$.fromAccess = $fromAccess;
export default $;
