webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(17);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(18);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_state__ = __webpack_require__(36);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_state_session__ = __webpack_require__(106);\n\n\n\n\n\nvar getStorage = function getStorage() {\n  return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 23));\n};\n\nvar Chat = /*#__PURE__*/function () {\n  function Chat() {\n    var _this = this;\n\n    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, Chat);\n\n    getStorage().then(function (storage) {\n      _this.storage = new storage.default();\n    });\n  } // Get all converstions\n\n\n  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(Chat, [{\n    key: \"getAllConversations\",\n    value: function getAllConversations() {\n      return __WEBPACK_IMPORTED_MODULE_2__core_state__[\"a\" /* default */].getters.getCurrentMessages;\n    } // Get active converation from local storage\n\n  }, {\n    key: \"getCurrentActiveConversationID\",\n    value: function getCurrentActiveConversationID() {\n      if (!this.storage.getLocalStorage(\"conversationID\")) {\n        var converstionID = this.startNewActiveConversation();\n        this.storage.setLocalStorage(\"conversationID\", converstionID);\n        return converstionID;\n      } else return this.storage.getLocalStorage(\"conversationID\");\n    } // set active converstaion to vuex\n\n  }, {\n    key: \"setActiveConversationID\",\n    value: function setActiveConversationID(conversationID) {\n      __WEBPACK_IMPORTED_MODULE_2__core_state__[\"a\" /* default */].commit(\"setActiveConversationID\", conversationID);\n    } // Generate active Converstaion\n\n  }, {\n    key: \"startNewActiveConversation\",\n    value: function startNewActiveConversation() {\n      var sessionInfo = new __WEBPACK_IMPORTED_MODULE_3__util_state_session__[\"a\" /* default */]();\n      var conversationID = sessionInfo.getConversationId();\n      this.setActiveConversationID(conversationID);\n      return conversationID;\n    }\n  }]);\n\n  return Chat;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY2hhdC9jb252ZXJzYXRpb25zLmpzPzI3NjgiXSwibmFtZXMiOlsiZ2V0U3RvcmFnZSIsIkNoYXQiLCJ0aGVuIiwic3RvcmFnZSIsImRlZmF1bHQiLCJzdGF0ZSIsImdldHRlcnMiLCJnZXRDdXJyZW50TWVzc2FnZXMiLCJnZXRMb2NhbFN0b3JhZ2UiLCJjb252ZXJzdGlvbklEIiwic3RhcnROZXdBY3RpdmVDb252ZXJzYXRpb24iLCJzZXRMb2NhbFN0b3JhZ2UiLCJjb252ZXJzYXRpb25JRCIsImNvbW1pdCIsInNlc3Npb25JbmZvIiwic2Vzc2lvbiIsImdldENvbnZlcnNhdGlvbklkIiwic2V0QWN0aXZlQ29udmVyc2F0aW9uSUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxTQUFNLHNGQUFOO0FBQUEsQ0FBbkI7O0lBRU1DLEk7QUFDSixrQkFBYztBQUFBOztBQUFBOztBQUNaRCxjQUFVLEdBQUdFLElBQWIsQ0FBa0IsVUFBQ0MsT0FBRCxFQUFhO0FBQzdCLFdBQUksQ0FBQ0EsT0FBTCxHQUFlLElBQUlBLE9BQU8sQ0FBQ0MsT0FBWixFQUFmO0FBQ0QsS0FGRDtBQUdELEcsQ0FFRDs7Ozs7V0FDQSwrQkFBc0I7QUFDcEIsYUFBT0MsNERBQUssQ0FBQ0MsT0FBTixDQUFjQyxrQkFBckI7QUFDRCxLLENBRUQ7Ozs7V0FDQSwwQ0FBaUM7QUFDL0IsVUFBSSxDQUFDLEtBQUtKLE9BQUwsQ0FBYUssZUFBYixDQUE2QixnQkFBN0IsQ0FBTCxFQUFxRDtBQUNuRCxZQUFJQyxhQUFhLEdBQUcsS0FBS0MsMEJBQUwsRUFBcEI7QUFDQSxhQUFLUCxPQUFMLENBQWFRLGVBQWIsQ0FBNkIsZ0JBQTdCLEVBQStDRixhQUEvQztBQUNBLGVBQU9BLGFBQVA7QUFDRCxPQUpELE1BSU8sT0FBTyxLQUFLTixPQUFMLENBQWFLLGVBQWIsQ0FBNkIsZ0JBQTdCLENBQVA7QUFDUixLLENBRUQ7Ozs7V0FDQSxpQ0FBd0JJLGNBQXhCLEVBQXdDO0FBQ3RDUCxrRUFBSyxDQUFDUSxNQUFOLENBQWEseUJBQWIsRUFBd0NELGNBQXhDO0FBQ0QsSyxDQUVEOzs7O1dBQ0Esc0NBQTZCO0FBQzNCLFVBQUlFLFdBQVcsR0FBRyxJQUFJQyxvRUFBSixFQUFsQjtBQUNBLFVBQUlILGNBQWMsR0FBR0UsV0FBVyxDQUFDRSxpQkFBWixFQUFyQjtBQUNBLFdBQUtDLHVCQUFMLENBQTZCTCxjQUE3QjtBQUNBLGFBQU9BLGNBQVA7QUFDRDs7Ozs7O0FBRVlYLG1FQUFmIiwiZmlsZSI6IjEwNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGF0ZSBmcm9tIFwiLi4vY29yZS9zdGF0ZVwiO1xuaW1wb3J0IHNlc3Npb24gZnJvbSBcIi4uL3V0aWwvc3RhdGUvc2Vzc2lvblwiO1xuY29uc3QgZ2V0U3RvcmFnZSA9ICgpID0+IGltcG9ydChcIi4uL3V0aWwvc3RvcmFnZVwiKTtcblxuY2xhc3MgQ2hhdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGdldFN0b3JhZ2UoKS50aGVuKChzdG9yYWdlKSA9PiB7XG4gICAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgc3RvcmFnZS5kZWZhdWx0KCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBHZXQgYWxsIGNvbnZlcnN0aW9uc1xuICBnZXRBbGxDb252ZXJzYXRpb25zKCkge1xuICAgIHJldHVybiBzdGF0ZS5nZXR0ZXJzLmdldEN1cnJlbnRNZXNzYWdlcztcbiAgfVxuXG4gIC8vIEdldCBhY3RpdmUgY29udmVyYXRpb24gZnJvbSBsb2NhbCBzdG9yYWdlXG4gIGdldEN1cnJlbnRBY3RpdmVDb252ZXJzYXRpb25JRCgpIHtcbiAgICBpZiAoIXRoaXMuc3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UoXCJjb252ZXJzYXRpb25JRFwiKSkge1xuICAgICAgdmFyIGNvbnZlcnN0aW9uSUQgPSB0aGlzLnN0YXJ0TmV3QWN0aXZlQ29udmVyc2F0aW9uKCk7XG4gICAgICB0aGlzLnN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKFwiY29udmVyc2F0aW9uSURcIiwgY29udmVyc3Rpb25JRCk7XG4gICAgICByZXR1cm4gY29udmVyc3Rpb25JRDtcbiAgICB9IGVsc2UgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UoXCJjb252ZXJzYXRpb25JRFwiKTtcbiAgfVxuXG4gIC8vIHNldCBhY3RpdmUgY29udmVyc3RhaW9uIHRvIHZ1ZXhcbiAgc2V0QWN0aXZlQ29udmVyc2F0aW9uSUQoY29udmVyc2F0aW9uSUQpIHtcbiAgICBzdGF0ZS5jb21taXQoXCJzZXRBY3RpdmVDb252ZXJzYXRpb25JRFwiLCBjb252ZXJzYXRpb25JRCk7XG4gIH1cblxuICAvLyBHZW5lcmF0ZSBhY3RpdmUgQ29udmVyc3RhaW9uXG4gIHN0YXJ0TmV3QWN0aXZlQ29udmVyc2F0aW9uKCkge1xuICAgIHZhciBzZXNzaW9uSW5mbyA9IG5ldyBzZXNzaW9uKCk7XG4gICAgdmFyIGNvbnZlcnNhdGlvbklEID0gc2Vzc2lvbkluZm8uZ2V0Q29udmVyc2F0aW9uSWQoKTtcbiAgICB0aGlzLnNldEFjdGl2ZUNvbnZlcnNhdGlvbklEKGNvbnZlcnNhdGlvbklEKTtcbiAgICByZXR1cm4gY29udmVyc2F0aW9uSUQ7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENoYXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2hhdC9jb252ZXJzYXRpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///107\n");

/***/ })

});