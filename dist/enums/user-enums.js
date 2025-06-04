"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallingModel = exports.Role = exports.CompanyName = void 0;
// src/enums/user-enums.ts
var CompanyName;
(function (CompanyName) {
    CompanyName["HAVISTO_TEA"] = "HAVISTO_TEA";
    CompanyName["LETS_VENTURE"] = "LETS_VENTURE";
    CompanyName["MYRIADAI"] = "MYRIADAI";
    CompanyName["CLEARTAX"] = "CLEARTAX";
    CompanyName["GOVERNMENT_OF_KARNATAKA"] = "GOVERNMENT_OF_KARNATAKA";
    CompanyName["WEEKDAY"] = "WEEKDAY";
})(CompanyName = exports.CompanyName || (exports.CompanyName = {}));
var Role;
(function (Role) {
    Role["SUPER_ADMIN"] = "SuperAdmin";
    Role["ADMIN"] = "Admin";
    Role["USER"] = "User";
    Role["GUEST"] = "Guest";
})(Role = exports.Role || (exports.Role = {}));
var CallingModel;
(function (CallingModel) {
    CallingModel["DEFAULT"] = "MyriadAI_V1";
    CallingModel["MyriadAI_V1"] = "MyriadAI_V1";
    CallingModel["MyriadAI_V2"] = "MyriadAI_V2";
})(CallingModel = exports.CallingModel || (exports.CallingModel = {}));
