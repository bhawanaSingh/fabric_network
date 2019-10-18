"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var convector_core_1 = require("@worldsibu/convector-core");
var myfirstapp_model_1 = require("./myfirstapp.model");
var MyfirstappController = (function (_super) {
    tslib_1.__extends(MyfirstappController, _super);
    function MyfirstappController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyfirstappController.prototype.create = function (myfirstapp) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, myfirstapp.save()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(myfirstapp_model_1.Myfirstapp))
    ], MyfirstappController.prototype, "create", null);
    MyfirstappController = tslib_1.__decorate([
        convector_core_1.Controller('myfirstapp')
    ], MyfirstappController);
    return MyfirstappController;
}(convector_core_1.ConvectorController));
exports.MyfirstappController = MyfirstappController;
//# sourceMappingURL=myfirstapp.controller.js.map