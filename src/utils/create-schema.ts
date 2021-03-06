import { RedisPubSub } from 'graphql-redis-subscriptions';
import Redis from 'ioredis';
import { buildSchema } from 'type-graphql';
import { ArticleResolver } from '~api/modules/article/ArticleResolver';
import { CategoryResolver } from '~api/modules/category/CategoryResolver';
import { TagResolver } from '~api/modules/tag/TagResolver';
import { LoginResolver } from '~api/modules/user/Login';
import { LogoutResolver } from '~api/modules/user/Logout';
import { RegisterResolver } from '~api/modules/user/Register';
import { UserAccountUtils } from '~api/modules/user/UserAccountUtils';
import { UserResolver } from '~api/modules/user/UserResolver';

export const createSchema = () => {
  const options: Redis.RedisOptions = {
    retryStrategy: times => Math.max(times * 100, 3000),
  };

  // create Redis-based pub-sub
  const pubSub = new RedisPubSub({
    publisher: new Redis(options),
    subscriber: new Redis(options),
  });

  return buildSchema({
    resolvers: [
      UserResolver,
      RegisterResolver,
      LoginResolver,
      LogoutResolver,
      UserAccountUtils,
      ArticleResolver,
      CategoryResolver,
      TagResolver,
    ],
    pubSub,
  });
};
