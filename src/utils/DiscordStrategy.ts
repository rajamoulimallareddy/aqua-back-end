import { Injectable, Inject } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, Profile } from "passport-discord";
import { IAuthService } from "src/auth/interfaces/auth";
import { SERVICES } from "src/utils/constants";

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject(SERVICES.AUTH) private readonly authService: IAuthService
    ) {
        super({
            clientID: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            callbackURL: process.env.DISCORD_REDIRECT_URI,
            scope: ['identify', 'email', 'guilds']
        })
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile) {
        const args = {
            discordId: profile.id,
            username: profile.username,
            discriminator: profile.discriminator,
            accessToken,
            refreshToken,
        }
        // console.log(args);
        this.authService.validateUser({
            discordId: profile.id,
            accessToken: accessToken,
            refreshToken: refreshToken,
            username: profile.username,
            discriminator: profile.discriminator
        })
    }
}