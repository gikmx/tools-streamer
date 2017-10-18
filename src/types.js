/**
 * @typedef {Object}
 * @memberof Tools.__types
 * @property {function(void)} isDirectory - Determine if node is a directory.
 * @property {function(void)} isFile - Determine if node is a file.
 * @description A stream containing stat from node.
 * @see [fs.stat](https://nodejs.org/api/fs.html#fs_class_fs_stats) for more properties.
 */
export const NodeStat = {};

/**
 * @typedef {Object}
 * @memberof Tools.__types
 * @property {string} type - The type of chunk that is being received. (stderr || stdout)
 * @property {string} data - The actual output.
 */
export const NodeOutput = {};

/**
 * @typedef {Object}
 * @memberof Tools.__types
 * @property {string} path - The full path for the node
 * @property {NodeStat} data - The actual output.
 */
export const NodePath = {};

/**
 * @typedef {Observable.<boolean>}
 * @memberof Tools.__types
 */
export const StreamBoolean = {};

/**
 * @typedef {Observable.<string>}
 * @memberof Tools.__types
 */
export const StreamString = {};

/**
 * A stream containing stat from node.
 * @typedef {Observable.<NodeStat>}
 * @memberof Tools.__types
 */
export const StreamStat = {};

/**
 * A stream containing stat from node.
 * @typedef {Observable.<NodeOutput>}
 * @memberof Tools.__types
 */
export const StreamOutput = {};

/**
 * A stream containing stat from node.
 * @typedef {Observable.<NodePath>}
 * @memberof Tools.__types
 */
export const StreamPath = {};

/**
    * @typedef {Error}
    * @memberof Tools.__types
    * @description Thrown when a parameter is not the correct type.
    */
export const StreamParamError = {
    name: 'StreamParamError',
    message: 'Invalid type sent for %, expecting "%s", got "%s"',
};

/**
 * @module __types
 * @memberof Tools
 */
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
