import { createExpressServer } from 'routing-controllers';
import { MaterialController } from './controller/MaterialController';

export const app = createExpressServer({
  controllers: [MaterialController],
  routePrefix: "/api/v1" 
});