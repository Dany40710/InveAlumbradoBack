"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaModule = void 0;
const common_1 = require("@nestjs/common");
const area_service_1 = require("./area.service");
const area_controller_1 = require("./area.controller");
const typeorm_1 = require("@nestjs/typeorm");
const area_entity_1 = require("./entities/area.entity");
const area_repository_1 = require("./repository/area.repository");
const shared_module_1 = require("../shared/shared.module");
const auth_module_1 = require("../auth/auth.module");
let AreaModule = class AreaModule {
};
AreaModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([area_entity_1.Area]),
            shared_module_1.SharedModule,
            auth_module_1.AuthModule
        ],
        controllers: [area_controller_1.AreaController],
        providers: [area_service_1.AreaService, area_repository_1.AreaRepository],
        exports: [typeorm_1.TypeOrmModule, area_service_1.AreaService],
    })
], AreaModule);
exports.AreaModule = AreaModule;
//# sourceMappingURL=area.module.js.map