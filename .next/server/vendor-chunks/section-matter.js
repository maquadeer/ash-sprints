"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/section-matter";
exports.ids = ["vendor-chunks/section-matter"];
exports.modules = {

/***/ "(rsc)/./node_modules/section-matter/index.js":
/*!**********************************************!*\
  !*** ./node_modules/section-matter/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar typeOf = __webpack_require__(/*! kind-of */ \"(rsc)/./node_modules/kind-of/index.js\");\nvar extend = __webpack_require__(/*! extend-shallow */ \"(rsc)/./node_modules/extend-shallow/index.js\");\n/**\n * Parse sections in `input` with the given `options`.\n *\n * ```js\n * var sections = require('{%= name %}');\n * var result = sections(input, options);\n * // { content: 'Content before sections', sections: [] }\n * ```\n * @param {String|Buffer|Object} `input` If input is an object, it's `content` property must be a string or buffer.\n * @param {Object} options\n * @return {Object} Returns an object with a `content` string and an array of `sections` objects.\n * @api public\n */ module.exports = function(input, options) {\n    if (typeof options === \"function\") {\n        options = {\n            parse: options\n        };\n    }\n    var file = toObject(input);\n    var defaults = {\n        section_delimiter: \"---\",\n        parse: identity\n    };\n    var opts = extend({}, defaults, options);\n    var delim = opts.section_delimiter;\n    var lines = file.content.split(/\\r?\\n/);\n    var sections = null;\n    var section = createSection();\n    var content = [];\n    var stack = [];\n    function initSections(val) {\n        file.content = val;\n        sections = [];\n        content = [];\n    }\n    function closeSection(val) {\n        if (stack.length) {\n            section.key = getKey(stack[0], delim);\n            section.content = val;\n            opts.parse(section, sections);\n            sections.push(section);\n            section = createSection();\n            content = [];\n            stack = [];\n        }\n    }\n    for(var i = 0; i < lines.length; i++){\n        var line = lines[i];\n        var len = stack.length;\n        var ln = line.trim();\n        if (isDelimiter(ln, delim)) {\n            if (ln.length === 3 && i !== 0) {\n                if (len === 0 || len === 2) {\n                    content.push(line);\n                    continue;\n                }\n                stack.push(ln);\n                section.data = content.join(\"\\n\");\n                content = [];\n                continue;\n            }\n            if (sections === null) {\n                initSections(content.join(\"\\n\"));\n            }\n            if (len === 2) {\n                closeSection(content.join(\"\\n\"));\n            }\n            stack.push(ln);\n            continue;\n        }\n        content.push(line);\n    }\n    if (sections === null) {\n        initSections(content.join(\"\\n\"));\n    } else {\n        closeSection(content.join(\"\\n\"));\n    }\n    file.sections = sections;\n    return file;\n};\nfunction isDelimiter(line, delim) {\n    if (line.slice(0, delim.length) !== delim) {\n        return false;\n    }\n    if (line.charAt(delim.length + 1) === delim.slice(-1)) {\n        return false;\n    }\n    return true;\n}\nfunction toObject(input) {\n    if (typeOf(input) !== \"object\") {\n        input = {\n            content: input\n        };\n    }\n    if (typeof input.content !== \"string\" && !isBuffer(input.content)) {\n        throw new TypeError(\"expected a buffer or string\");\n    }\n    input.content = input.content.toString();\n    input.sections = [];\n    return input;\n}\nfunction getKey(val, delim) {\n    return val ? val.slice(delim.length).trim() : \"\";\n}\nfunction createSection() {\n    return {\n        key: \"\",\n        data: \"\",\n        content: \"\"\n    };\n}\nfunction identity(val) {\n    return val;\n}\nfunction isBuffer(val) {\n    if (val && val.constructor && typeof val.constructor.isBuffer === \"function\") {\n        return val.constructor.isBuffer(val);\n    }\n    return false;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc2VjdGlvbi1tYXR0ZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxTQUFTQyxtQkFBT0EsQ0FBQztBQUNyQixJQUFJQyxTQUFTRCxtQkFBT0EsQ0FBQztBQUVyQjs7Ozs7Ozs7Ozs7O0NBWUMsR0FFREUsT0FBT0MsT0FBTyxHQUFHLFNBQVNDLEtBQUssRUFBRUMsT0FBTztJQUN0QyxJQUFJLE9BQU9BLFlBQVksWUFBWTtRQUNqQ0EsVUFBVTtZQUFFQyxPQUFPRDtRQUFRO0lBQzdCO0lBRUEsSUFBSUUsT0FBT0MsU0FBU0o7SUFDcEIsSUFBSUssV0FBVztRQUFDQyxtQkFBbUI7UUFBT0osT0FBT0s7SUFBUTtJQUN6RCxJQUFJQyxPQUFPWCxPQUFPLENBQUMsR0FBR1EsVUFBVUo7SUFDaEMsSUFBSVEsUUFBUUQsS0FBS0YsaUJBQWlCO0lBQ2xDLElBQUlJLFFBQVFQLEtBQUtRLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDO0lBQy9CLElBQUlDLFdBQVc7SUFDZixJQUFJQyxVQUFVQztJQUNkLElBQUlKLFVBQVUsRUFBRTtJQUNoQixJQUFJSyxRQUFRLEVBQUU7SUFFZCxTQUFTQyxhQUFhQyxHQUFHO1FBQ3ZCZixLQUFLUSxPQUFPLEdBQUdPO1FBQ2ZMLFdBQVcsRUFBRTtRQUNiRixVQUFVLEVBQUU7SUFDZDtJQUVBLFNBQVNRLGFBQWFELEdBQUc7UUFDdkIsSUFBSUYsTUFBTUksTUFBTSxFQUFFO1lBQ2hCTixRQUFRTyxHQUFHLEdBQUdDLE9BQU9OLEtBQUssQ0FBQyxFQUFFLEVBQUVQO1lBQy9CSyxRQUFRSCxPQUFPLEdBQUdPO1lBQ2xCVixLQUFLTixLQUFLLENBQUNZLFNBQVNEO1lBQ3BCQSxTQUFTVSxJQUFJLENBQUNUO1lBQ2RBLFVBQVVDO1lBQ1ZKLFVBQVUsRUFBRTtZQUNaSyxRQUFRLEVBQUU7UUFDWjtJQUNGO0lBRUEsSUFBSyxJQUFJUSxJQUFJLEdBQUdBLElBQUlkLE1BQU1VLE1BQU0sRUFBRUksSUFBSztRQUNyQyxJQUFJQyxPQUFPZixLQUFLLENBQUNjLEVBQUU7UUFDbkIsSUFBSUUsTUFBTVYsTUFBTUksTUFBTTtRQUN0QixJQUFJTyxLQUFLRixLQUFLRyxJQUFJO1FBRWxCLElBQUlDLFlBQVlGLElBQUlsQixRQUFRO1lBQzFCLElBQUlrQixHQUFHUCxNQUFNLEtBQUssS0FBS0ksTUFBTSxHQUFHO2dCQUM5QixJQUFJRSxRQUFRLEtBQUtBLFFBQVEsR0FBRztvQkFDMUJmLFFBQVFZLElBQUksQ0FBQ0U7b0JBQ2I7Z0JBQ0Y7Z0JBQ0FULE1BQU1PLElBQUksQ0FBQ0k7Z0JBQ1hiLFFBQVFnQixJQUFJLEdBQUduQixRQUFRb0IsSUFBSSxDQUFDO2dCQUM1QnBCLFVBQVUsRUFBRTtnQkFDWjtZQUNGO1lBRUEsSUFBSUUsYUFBYSxNQUFNO2dCQUNyQkksYUFBYU4sUUFBUW9CLElBQUksQ0FBQztZQUM1QjtZQUVBLElBQUlMLFFBQVEsR0FBRztnQkFDYlAsYUFBYVIsUUFBUW9CLElBQUksQ0FBQztZQUM1QjtZQUVBZixNQUFNTyxJQUFJLENBQUNJO1lBQ1g7UUFDRjtRQUVBaEIsUUFBUVksSUFBSSxDQUFDRTtJQUNmO0lBRUEsSUFBSVosYUFBYSxNQUFNO1FBQ3JCSSxhQUFhTixRQUFRb0IsSUFBSSxDQUFDO0lBQzVCLE9BQU87UUFDTFosYUFBYVIsUUFBUW9CLElBQUksQ0FBQztJQUM1QjtJQUVBNUIsS0FBS1UsUUFBUSxHQUFHQTtJQUNoQixPQUFPVjtBQUNUO0FBRUEsU0FBUzBCLFlBQVlKLElBQUksRUFBRWhCLEtBQUs7SUFDOUIsSUFBSWdCLEtBQUtPLEtBQUssQ0FBQyxHQUFHdkIsTUFBTVcsTUFBTSxNQUFNWCxPQUFPO1FBQ3pDLE9BQU87SUFDVDtJQUNBLElBQUlnQixLQUFLUSxNQUFNLENBQUN4QixNQUFNVyxNQUFNLEdBQUcsT0FBT1gsTUFBTXVCLEtBQUssQ0FBQyxDQUFDLElBQUk7UUFDckQsT0FBTztJQUNUO0lBQ0EsT0FBTztBQUNUO0FBRUEsU0FBUzVCLFNBQVNKLEtBQUs7SUFDckIsSUFBSUwsT0FBT0ssV0FBVyxVQUFVO1FBQzlCQSxRQUFRO1lBQUVXLFNBQVNYO1FBQU07SUFDM0I7SUFFQSxJQUFJLE9BQU9BLE1BQU1XLE9BQU8sS0FBSyxZQUFZLENBQUN1QixTQUFTbEMsTUFBTVcsT0FBTyxHQUFHO1FBQ2pFLE1BQU0sSUFBSXdCLFVBQVU7SUFDdEI7SUFFQW5DLE1BQU1XLE9BQU8sR0FBR1gsTUFBTVcsT0FBTyxDQUFDeUIsUUFBUTtJQUN0Q3BDLE1BQU1hLFFBQVEsR0FBRyxFQUFFO0lBQ25CLE9BQU9iO0FBQ1Q7QUFFQSxTQUFTc0IsT0FBT0osR0FBRyxFQUFFVCxLQUFLO0lBQ3hCLE9BQU9TLE1BQU1BLElBQUljLEtBQUssQ0FBQ3ZCLE1BQU1XLE1BQU0sRUFBRVEsSUFBSSxLQUFLO0FBQ2hEO0FBRUEsU0FBU2I7SUFDUCxPQUFPO1FBQUVNLEtBQUs7UUFBSVMsTUFBTTtRQUFJbkIsU0FBUztJQUFHO0FBQzFDO0FBRUEsU0FBU0osU0FBU1csR0FBRztJQUNuQixPQUFPQTtBQUNUO0FBRUEsU0FBU2dCLFNBQVNoQixHQUFHO0lBQ25CLElBQUlBLE9BQU9BLElBQUltQixXQUFXLElBQUksT0FBT25CLElBQUltQixXQUFXLENBQUNILFFBQVEsS0FBSyxZQUFZO1FBQzVFLE9BQU9oQixJQUFJbUIsV0FBVyxDQUFDSCxRQUFRLENBQUNoQjtJQUNsQztJQUNBLE9BQU87QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2FzaC1ibG9nLy4vbm9kZV9tb2R1bGVzL3NlY3Rpb24tbWF0dGVyL2luZGV4LmpzP2UzMDYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdHlwZU9mID0gcmVxdWlyZSgna2luZC1vZicpO1xudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ2V4dGVuZC1zaGFsbG93Jyk7XG5cbi8qKlxuICogUGFyc2Ugc2VjdGlvbnMgaW4gYGlucHV0YCB3aXRoIHRoZSBnaXZlbiBgb3B0aW9uc2AuXG4gKlxuICogYGBganNcbiAqIHZhciBzZWN0aW9ucyA9IHJlcXVpcmUoJ3slPSBuYW1lICV9Jyk7XG4gKiB2YXIgcmVzdWx0ID0gc2VjdGlvbnMoaW5wdXQsIG9wdGlvbnMpO1xuICogLy8geyBjb250ZW50OiAnQ29udGVudCBiZWZvcmUgc2VjdGlvbnMnLCBzZWN0aW9uczogW10gfVxuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ3xCdWZmZXJ8T2JqZWN0fSBgaW5wdXRgIElmIGlucHV0IGlzIGFuIG9iamVjdCwgaXQncyBgY29udGVudGAgcHJvcGVydHkgbXVzdCBiZSBhIHN0cmluZyBvciBidWZmZXIuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7T2JqZWN0fSBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIGEgYGNvbnRlbnRgIHN0cmluZyBhbmQgYW4gYXJyYXkgb2YgYHNlY3Rpb25zYCBvYmplY3RzLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlucHV0LCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMgPSB7IHBhcnNlOiBvcHRpb25zIH07XG4gIH1cblxuICB2YXIgZmlsZSA9IHRvT2JqZWN0KGlucHV0KTtcbiAgdmFyIGRlZmF1bHRzID0ge3NlY3Rpb25fZGVsaW1pdGVyOiAnLS0tJywgcGFyc2U6IGlkZW50aXR5fTtcbiAgdmFyIG9wdHMgPSBleHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgdmFyIGRlbGltID0gb3B0cy5zZWN0aW9uX2RlbGltaXRlcjtcbiAgdmFyIGxpbmVzID0gZmlsZS5jb250ZW50LnNwbGl0KC9cXHI/XFxuLyk7XG4gIHZhciBzZWN0aW9ucyA9IG51bGw7XG4gIHZhciBzZWN0aW9uID0gY3JlYXRlU2VjdGlvbigpO1xuICB2YXIgY29udGVudCA9IFtdO1xuICB2YXIgc3RhY2sgPSBbXTtcblxuICBmdW5jdGlvbiBpbml0U2VjdGlvbnModmFsKSB7XG4gICAgZmlsZS5jb250ZW50ID0gdmFsO1xuICAgIHNlY3Rpb25zID0gW107XG4gICAgY29udGVudCA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VTZWN0aW9uKHZhbCkge1xuICAgIGlmIChzdGFjay5sZW5ndGgpIHtcbiAgICAgIHNlY3Rpb24ua2V5ID0gZ2V0S2V5KHN0YWNrWzBdLCBkZWxpbSk7XG4gICAgICBzZWN0aW9uLmNvbnRlbnQgPSB2YWw7XG4gICAgICBvcHRzLnBhcnNlKHNlY3Rpb24sIHNlY3Rpb25zKTtcbiAgICAgIHNlY3Rpb25zLnB1c2goc2VjdGlvbik7XG4gICAgICBzZWN0aW9uID0gY3JlYXRlU2VjdGlvbigpO1xuICAgICAgY29udGVudCA9IFtdO1xuICAgICAgc3RhY2sgPSBbXTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGxpbmUgPSBsaW5lc1tpXTtcbiAgICB2YXIgbGVuID0gc3RhY2subGVuZ3RoO1xuICAgIHZhciBsbiA9IGxpbmUudHJpbSgpO1xuXG4gICAgaWYgKGlzRGVsaW1pdGVyKGxuLCBkZWxpbSkpIHtcbiAgICAgIGlmIChsbi5sZW5ndGggPT09IDMgJiYgaSAhPT0gMCkge1xuICAgICAgICBpZiAobGVuID09PSAwIHx8IGxlbiA9PT0gMikge1xuICAgICAgICAgIGNvbnRlbnQucHVzaChsaW5lKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBzdGFjay5wdXNoKGxuKTtcbiAgICAgICAgc2VjdGlvbi5kYXRhID0gY29udGVudC5qb2luKCdcXG4nKTtcbiAgICAgICAgY29udGVudCA9IFtdO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlY3Rpb25zID09PSBudWxsKSB7XG4gICAgICAgIGluaXRTZWN0aW9ucyhjb250ZW50LmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxlbiA9PT0gMikge1xuICAgICAgICBjbG9zZVNlY3Rpb24oY29udGVudC5qb2luKCdcXG4nKSk7XG4gICAgICB9XG5cbiAgICAgIHN0YWNrLnB1c2gobG4pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY29udGVudC5wdXNoKGxpbmUpO1xuICB9XG5cbiAgaWYgKHNlY3Rpb25zID09PSBudWxsKSB7XG4gICAgaW5pdFNlY3Rpb25zKGNvbnRlbnQuam9pbignXFxuJykpO1xuICB9IGVsc2Uge1xuICAgIGNsb3NlU2VjdGlvbihjb250ZW50LmpvaW4oJ1xcbicpKTtcbiAgfVxuXG4gIGZpbGUuc2VjdGlvbnMgPSBzZWN0aW9ucztcbiAgcmV0dXJuIGZpbGU7XG59O1xuXG5mdW5jdGlvbiBpc0RlbGltaXRlcihsaW5lLCBkZWxpbSkge1xuICBpZiAobGluZS5zbGljZSgwLCBkZWxpbS5sZW5ndGgpICE9PSBkZWxpbSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAobGluZS5jaGFyQXQoZGVsaW0ubGVuZ3RoICsgMSkgPT09IGRlbGltLnNsaWNlKC0xKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gdG9PYmplY3QoaW5wdXQpIHtcbiAgaWYgKHR5cGVPZihpbnB1dCkgIT09ICdvYmplY3QnKSB7XG4gICAgaW5wdXQgPSB7IGNvbnRlbnQ6IGlucHV0IH07XG4gIH1cblxuICBpZiAodHlwZW9mIGlucHV0LmNvbnRlbnQgIT09ICdzdHJpbmcnICYmICFpc0J1ZmZlcihpbnB1dC5jb250ZW50KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIGEgYnVmZmVyIG9yIHN0cmluZycpO1xuICB9XG5cbiAgaW5wdXQuY29udGVudCA9IGlucHV0LmNvbnRlbnQudG9TdHJpbmcoKTtcbiAgaW5wdXQuc2VjdGlvbnMgPSBbXTtcbiAgcmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBnZXRLZXkodmFsLCBkZWxpbSkge1xuICByZXR1cm4gdmFsID8gdmFsLnNsaWNlKGRlbGltLmxlbmd0aCkudHJpbSgpIDogJyc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb24oKSB7XG4gIHJldHVybiB7IGtleTogJycsIGRhdGE6ICcnLCBjb250ZW50OiAnJyB9O1xufVxuXG5mdW5jdGlvbiBpZGVudGl0eSh2YWwpIHtcbiAgcmV0dXJuIHZhbDtcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIGlmICh2YWwgJiYgdmFsLmNvbnN0cnVjdG9yICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuIl0sIm5hbWVzIjpbInR5cGVPZiIsInJlcXVpcmUiLCJleHRlbmQiLCJtb2R1bGUiLCJleHBvcnRzIiwiaW5wdXQiLCJvcHRpb25zIiwicGFyc2UiLCJmaWxlIiwidG9PYmplY3QiLCJkZWZhdWx0cyIsInNlY3Rpb25fZGVsaW1pdGVyIiwiaWRlbnRpdHkiLCJvcHRzIiwiZGVsaW0iLCJsaW5lcyIsImNvbnRlbnQiLCJzcGxpdCIsInNlY3Rpb25zIiwic2VjdGlvbiIsImNyZWF0ZVNlY3Rpb24iLCJzdGFjayIsImluaXRTZWN0aW9ucyIsInZhbCIsImNsb3NlU2VjdGlvbiIsImxlbmd0aCIsImtleSIsImdldEtleSIsInB1c2giLCJpIiwibGluZSIsImxlbiIsImxuIiwidHJpbSIsImlzRGVsaW1pdGVyIiwiZGF0YSIsImpvaW4iLCJzbGljZSIsImNoYXJBdCIsImlzQnVmZmVyIiwiVHlwZUVycm9yIiwidG9TdHJpbmciLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/section-matter/index.js\n");

/***/ })

};
;