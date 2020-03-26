import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { AnalyticsService } from './analytics.service';
import { AnalyticsType } from './dto/create-analytics.dto';
import { AnalyticsInput } from './inputs/analytics.input';

@Resolver('Urls')
export class AnalyticsResolver {
    constructor(private readonly analyticsService: AnalyticsService) {}
    @Query(() => [AnalyticsType])
    async analytics() {
        return this.analyticsService.findAll();
    }
    @Query(() => [AnalyticsType])
    async getAnalytics(@Args('input') url: string) {
        return this.analyticsService.findWithQry({ url });
    }

    @Mutation(() => AnalyticsType)
    async createAnalytics(@Args('input') input: AnalyticsInput) {
        return this.analyticsService.create(input);
    }
}
