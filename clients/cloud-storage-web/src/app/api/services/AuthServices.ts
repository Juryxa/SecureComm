import {auth} from "@/app/api/http/auth";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "@/app/api/models/response/AuthResponse";

export default class AuthService {
    static async login(email: string, password: string, platform: string): Promise<AxiosResponse<AuthResponse>> {
        return auth.post<AuthResponse>('/user/login', { email, password, platform });
    }

    static async signup(email: string, password: string, platform: string): Promise<AxiosResponse<AuthResponse>> {
        return auth.post<AuthResponse>('/user/signup', { email, password, platform });
    }

    static async logout(platform: 'web'): Promise<void> {
        return auth.post('/user/logout', {platform});
    }

}
