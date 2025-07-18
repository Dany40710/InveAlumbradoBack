"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const article_entry_entity_1 = require("../../article-entry/entities/article-entry.entity");
const article_exit_entity_1 = require("../../article-exit/entities/article-exit.entity");
const role_entity_1 = require("./role.entity");
let User = class User {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 100,
        unique: true,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 100,
        select: false,
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({
        type: 'bool',
        default: true,
    }),
    __metadata("design:type", Boolean)
], User.prototype, "status", void 0);
__decorate([
    typeorm_1.ManyToOne(() => role_entity_1.Role, (role) => role, { cascade: true, eager: true }),
    __metadata("design:type", role_entity_1.Role)
], User.prototype, "role", void 0);
__decorate([
    typeorm_1.OneToMany(() => article_entry_entity_1.ArticleEntry, (articleEntry) => articleEntry.user),
    __metadata("design:type", Array)
], User.prototype, "articleEntry", void 0);
__decorate([
    typeorm_1.OneToMany(() => article_exit_entity_1.ArticleExit, (articleExit) => articleExit.user),
    __metadata("design:type", Array)
], User.prototype, "articleExit", void 0);
User = __decorate([
    typeorm_1.Entity('users')
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map