import { KAFKA_SERVICE } from '@app/kafka';
import { KAFKA_TOPICS } from '@app/kafka/constants/kafka.constants';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AuthServiceService implements OnModuleInit {
  constructor(
    @Inject(KAFKA_SERVICE) private readonly kafkaClient: ClientKafka,
  ) {}

  async onModuleInit() {
    // connect kafka when module initialise
    await this.kafkaClient.connect();
  }

  // this is for testing the route
  // getHello(): string {
  //   return 'Hello World!';
  // }

  // simulateUserRegistrationg(email: string) {
  //   // publist event to kafka

  //   this.kafkaClient.emit(KAFKA_TOPICS.USER_REGISTERED, {
  //     email,
  //     timestamp: new Date().toISOString(),
  //   });
  //   return { message: `User registered: ${email}` };
  // }
}
