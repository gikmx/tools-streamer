# [@gik/tools-streamer](http://gik.mx) *0.0.11*
> RXjs extra operators. Part of our [tools suite](https://github.com/gikmx/tools).

##### Contributors
- [Héctor Menéndez](mailto:hector@gik.mx) []()

##### Supported platforms
- darwin
- linux

#### <a name="table-of-contents"></a> Table of contents
- **[streamer](#streamer)** An utility belt for our most common operations with RXJS's Observables.
  - **[fromAccess](#streamer.fromAccess)** `member` Determine if given path is accessible.
  - **[fromStat](#streamer.fromStat)** `member` Determine statistics about a file system node.
  - **[fromSpawn](#streamer.fromSpawn)** `member` Spawn a shell command.
  - **[fromDirMake](#streamer.fromDirMake)** `member` Creates a directory.
  - **[fromDirRequire](#streamer.fromDirRequire)** `member` Requires a directory path, if the directory does not exists, it's created.
  - **[fromDirRead](#streamer.fromDirRead)** `member` Get path of nodes in given directory (non recursively).
  - **[fromDirReadRecursive](#streamer.fromDirReadRecursive)** `member` Get path of nodes in given directory (recursively).
  - **[fromFileRead](#streamer.fromFileRead)** `member` Reads a file from the disk.
  - **[fromFileWrite](#streamer.fromFileWrite)** `member` Writes a file on the disk.


# <a name="streamer"></a> streamer

An utility belt for our most common operations with RXJS's Observables.
> - [Standalone version](https://github.com/gikmx/tools-streamer).
> - [Report a Bug](https://github.com/gikmx/tools-streamer/issues).


###### To do
- [ ] Add unit tests for all operators.


###### Members

- [fromAccess](#streamer.fromAccess)
- [fromStat](#streamer.fromStat)
- [fromSpawn](#streamer.fromSpawn)
- [fromDirMake](#streamer.fromDirMake)
- [fromDirRequire](#streamer.fromDirRequire)
- [fromDirRead](#streamer.fromDirRead)
- [fromDirReadRecursive](#streamer.fromDirReadRecursive)
- [fromFileRead](#streamer.fromFileRead)
- [fromFileWrite](#streamer.fromFileWrite)

<small>**[▲ Top](#table-of-contents)**</small>

---

## <a name="streamer.fromAccess"></a> fromAccess
> static  property of [`streamer`](#streamer)


Determine if given path is accessible.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>path</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>A path to the node you want to check.</td>
    </tr>
</table>


###### Returns
 [`StreamBoolean`](#StreamBoolean) <span style="font-weight:normal"> - Wether the file is accessible or not.</span>

<small>**[▲ Top](#streamer)**</small>

---

## <a name="streamer.fromStat"></a> fromStat
> static  property of [`streamer`](#streamer)


Determine statistics about a file system node.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>path</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>A path to the node you want to check.</td>
    </tr>
</table>


###### Returns
 [`StreamStat`](#StreamStat) <span style="font-weight:normal"> - stat object for the node.</span>
###### Throws
- `Error` - When given an invalid node.


<small>**[▲ Top](#streamer)**</small>

---

## <a name="streamer.fromSpawn"></a> fromSpawn
> static  property of [`streamer`](#streamer)


Spawn a shell command.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>command</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The command you wish to spawn.</td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>config</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#Object">Object</a>
        </td>
        <td>Configs sent to spawn command.</td>
    </tr>
</table>


###### Returns
 [`StreamOutput`](#StreamOutput) <span style="font-weight:normal"> - Each chunk of either stdout or stderr data.</span>

<small>**[▲ Top](#streamer)**</small>

---

## <a name="streamer.fromDirMake"></a> fromDirMake
> static  property of [`streamer`](#streamer)


Creates a directory.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>path</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The directory to be created.</td>
    </tr>
</table>


###### Returns
 [`StreamString`](#StreamString) <span style="font-weight:normal"> - The path of the directory that was just created.</span>
###### Throws
- `Error` - When directory cannot be created.


<small>**[▲ Top](#streamer)**</small>

---

## <a name="streamer.fromDirRequire"></a> fromDirRequire
> static  property of [`streamer`](#streamer)


Requires a directory path, if the directory does not exists, it's created.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>dirpath</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The requested directory.</td>
    </tr>
</table>


###### Returns
 [`Array.<StreamString>`](#Array.<StreamString>) <span style="font-weight:normal"> - The path of the directory.</span>
###### Throws
- `Error` - When requested path exists and is not a directory.


<small>**[▲ Top](#streamer)**</small>

---

## <a name="streamer.fromDirRead"></a> fromDirRead
> static  property of [`streamer`](#streamer)


Get path of nodes in given directory (non recursively).

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>path</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The requested directory.</td>
    </tr>
</table>


###### Returns
 [`Array.<StreamDirNode>`](#Array.<StreamDirNode>) <span style="font-weight:normal"> - The path of the directory.</span>
###### Throws
- `Error` - When requested path exists and is not a directory.


<small>**[▲ Top](#streamer)**</small>

---

## <a name="streamer.fromDirReadRecursive"></a> fromDirReadRecursive
> static  property of [`streamer`](#streamer)


Get path of nodes in given directory (recursively).

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>path</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The requested directory.</td>
    </tr>
</table>


###### Returns
 [`StreamPath`](#StreamPath) <span style="font-weight:normal"> - The path of the directory.</span>
###### Throws
- `Error` - When requested path exists and is not a directory.


<small>**[▲ Top](#streamer)**</small>

---

## <a name="streamer.fromFileRead"></a> fromFileRead
> static  property of [`streamer`](#streamer)


Reads a file from the disk.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>path</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The path to the file to read.</td>
    </tr>
</table>


###### Returns
 [`Observable.<string>`](#Observable.<string>) <span style="font-weight:normal"> - The contents of the file.</span>

<small>**[▲ Top](#streamer)**</small>

---

## <a name="streamer.fromFileWrite"></a> fromFileWrite
> static  property of [`streamer`](#streamer)


Writes a file on the disk.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>path</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The full path for the file.</td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>content</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The contents of the file.</td>
    </tr>
</table>


###### Returns
 [`Observable.<string>`](#Observable.<string>) <span style="font-weight:normal"> - The future value `true` if write was succesful.</span>
###### Throws
- `Error` - When the file cannot be written.


<small>**[▲ Top](#streamer)**</small>

---

# <a name="Types"></a> Types

###### Members

- [NodeOutput](#Types.NodeOutput)
- [NodePath](#Types.NodePath)
- [StreamBoolean](#Types.StreamBoolean)
- [StreamString](#Types.StreamString)
- [StreamStat](#Types.StreamStat)
- [StreamOutput](#Types.StreamOutput)
- [StreamPath](#Types.StreamPath)
- [StreamParamError](#Types.StreamParamError)

<small>**[▲ Top](#table-of-contents)**</small>

---

## <a name="Types.NodeOutput"></a> NodeOutput
> static  typedef of [`Types`](#Types)

###### Properties
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>type</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The type of chunk that is being received. (stderr || stdout)</td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>data</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The actual output.</td>
    </tr>
</table>



<small>**[▲ Top](#Types)**</small>

---

## <a name="Types.NodePath"></a> NodePath
> static  typedef of [`Types`](#Types)

###### Properties
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>path</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The full path for the node</td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>data</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#NodeStat">NodeStat</a>
        </td>
        <td>The actual output.</td>
    </tr>
</table>



<small>**[▲ Top](#Types)**</small>

---

## <a name="Types.StreamBoolean"></a> StreamBoolean
> static  typedef of [`Types`](#Types)



<small>**[▲ Top](#Types)**</small>

---

## <a name="Types.StreamString"></a> StreamString
> static  typedef of [`Types`](#Types)



<small>**[▲ Top](#Types)**</small>

---

## <a name="Types.StreamStat"></a> StreamStat
> static  typedef of [`Types`](#Types)


A stream containing stat from node.



<small>**[▲ Top](#Types)**</small>

---

## <a name="Types.StreamOutput"></a> StreamOutput
> static  typedef of [`Types`](#Types)


A stream containing stat from node.



<small>**[▲ Top](#Types)**</small>

---

## <a name="Types.StreamPath"></a> StreamPath
> static  typedef of [`Types`](#Types)


A stream containing stat from node.



<small>**[▲ Top](#Types)**</small>

---

## <a name="Types.StreamParamError"></a> StreamParamError
> static  typedef of [`Types`](#Types)


Thrown when a parameter is not the correct type.



<small>**[▲ Top](#Types)**</small>

---

