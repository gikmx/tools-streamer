/**
 * A stream containing stat from node.
 * see [fs.stat](https://nodejs.org/api/fs.html#fs_class_fs_stats) for more properties.
 * @typedef {Object}
 * @property {function(void)} isDirectory - Determine if node is a directory.
 * @property {function(void)} isFile - Determine if node is a file.
 * @memberof Types
 */
export const NodeStat = {};

/**
 * @typedef {Object}
 * @property {string} type - The type of chunk that is being received. (stderr || stdout)
 * @property {string} data - The actual output.
 * @memberof Types
 */
export const NodeOutput = {};

/**
 * @typedef {Object}
 * @property {string} path - The full path for the node
 * @property {NodeStat} data - The actual output.
 * @memberof Types
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
 * A stream containing stat from node.
 * @typedef {Observable.<NodeStat>}
 * @memberof Types
 */
export const StreamStat = {};

/**
 * A stream containing stat from node.
 * @typedef {Observable.<NodeOutput>}
 * @memberof Types
 */
export const StreamOutput = {};

/**
 * A stream containing stat from node.
 * @typedef {Observable.<NodePath>}
 * @memberof Types
 */
export const StreamPath = {};

/**
 * Thrown when a parameter is not the correct type.
 * @typedef {Error}
 * @memberof Types
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
