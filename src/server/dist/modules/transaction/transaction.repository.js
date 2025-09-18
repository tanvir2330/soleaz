"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRepository = void 0;
const database_config_1 = __importDefault(require("@/infra/database/database.config"));
class TransactionRepository {
    constructor() { }
    findMany() {
        return __awaiter(this, void 0, void 0, function* () {
            return database_config_1.default.transaction.findMany();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return database_config_1.default.transaction.findUnique({
                where: { id },
                include: {
                    order: {
                        include: {
                            payment: true,
                            shipment: true,
                            user: true,
                            address: true,
                            orderItems: true,
                        },
                    },
                },
            });
        });
    }
    createTransaction(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return database_config_1.default.transaction.create({
                data,
            });
        });
    }
    updateTransaction(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return database_config_1.default.transaction.update({
                where: { id },
                data,
            });
        });
    }
    deleteTransaction(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return database_config_1.default.transaction.delete({
                where: { id },
            });
        });
    }
}
exports.TransactionRepository = TransactionRepository;
