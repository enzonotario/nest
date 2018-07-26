"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_tcp_1 = require("./client-tcp");
const client_redis_1 = require("./client-redis");
const transport_enum_1 = require("../enums/transport.enum");
const client_nats_1 = require("./client-nats");
const client_mqtt_1 = require("./client-mqtt");
const client_grpc_1 = require("./client-grpc");
const client_rmq_1 = require("./client-rmq");
class ClientProxyFactory {
    static create(options) {
        const { transport } = options;
        switch (transport) {
            case transport_enum_1.Transport.REDIS:
                return new client_redis_1.ClientRedis(options);
            case transport_enum_1.Transport.NATS:
                return new client_nats_1.ClientNats(options);
            case transport_enum_1.Transport.MQTT:
                return new client_mqtt_1.ClientMqtt(options);
            case transport_enum_1.Transport.GRPC:
                return new client_grpc_1.ClientGrpcProxy(options);
            case transport_enum_1.Transport.RMQ:
                return new client_rmq_1.ClientRMQ(options);
            default:
                return new client_tcp_1.ClientTCP(options);
        }
    }
}
exports.ClientProxyFactory = ClientProxyFactory;
