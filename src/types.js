/**
 * @typedef {Object}
 * @memberof Types
 * @description A stream containing stat from node.
 * see [fs.stat](https://nodejs.org/api/fs.html#fs_class_fs_stats) for more properties.
 * @property {function(void)} isDirectory - Determine if node is a directory.
 * @property {function(void)} isFile - Determine if node is a file.
 */
export const NodeStat = {};

/**
 * @typedef {Object}
 * @memberof Types
 * @property {string} type - The type of chunk that is being received. (stderr || stdout)
 * @property {string} data - The actual output.
 */
export const NodeOutput = {};

/**
 * @typedef {Object}
 * @memberof Types
 * @property {string} path - The full path for the node
 * @property {NodeStat} data - The actual output.
 */
export const NodePath = {};

/**
 * @typedef {Observable.<boolean>}
 * @memberof Types
 */
export const StreamBoolean = {};

/**
 * @typedef {Observable.<string>}
 * @memberof Types
 */
export const StreamString = {};

/**
 * @typedef {Observable.<NodeStat>}
 * @memberof Types
 * @description A stream containing stat from node.
 */
export const StreamStat = {};

/**
 * @typedef {Observable.<NodeOutput>}
 * @memberof Types
 * @description A stream containing stat from node.
 */
export const StreamOutput = {};

/**
 * @typedef {Observable.<NodePath>}
 * @memberof Types
 * @description A stream containing stat from node.
 */
export const StreamPath = {};

/**
 * @typedef {Error}
 * @memberof Types
 * @description Thrown when a parameter is not the correct type.
 */
export const StreamParamError = {
    name: 'StreamParamError',
    message: 'Invalid type sent for %s, expecting "%s", got "%s"',
};

export default {
    NodeOutput,
    NodePath,
    Boolean: StreamBoolean,
    String: StreamString,
    Stat: StreamStat,
    Output: StreamOutput,
    Path: StreamPath,
    ParamError: StreamParamError,
};
