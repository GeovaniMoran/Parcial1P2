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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParcialggController = void 0;
const common_1 = require("@nestjs/common");
let ParcialggController = class ParcialggController {
    getHola() {
        return 'Hola Mundo^_^';
    }
    dividir(dividendo, divisor) {
        if (divisor === 0) {
            throw new common_1.BadGatewayException('El divisor no puede ser cero :V');
        }
        const resultado = dividendo / divisor;
        return resultado;
    }
    multiplicar(numeros) {
        const { n1, n2 } = numeros;
        return n1 * n2;
    }
    getSaludo(name) {
        return `¿Bienvenido jovenazo, ${name}!`;
    }
};
exports.ParcialggController = ParcialggController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ParcialggController.prototype, "getHola", null);
__decorate([
    (0, common_1.Post)('/Dividir'),
    __param(0, (0, common_1.Body)('dividendo')),
    __param(1, (0, common_1.Body)('divisor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], ParcialggController.prototype, "dividir", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Number)
], ParcialggController.prototype, "multiplicar", null);
__decorate([
    (0, common_1.Get)('/Saludo/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], ParcialggController.prototype, "getSaludo", null);
exports.ParcialggController = ParcialggController = __decorate([
    (0, common_1.Controller)('parcialgg')
], ParcialggController);
//# sourceMappingURL=parcialgg.controller.js.map