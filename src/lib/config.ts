import { dev } from "$app/environment";
import _translation from "$lib/translation.json";

interface IModule {
        [key:string]:IModule | string[]  | string
    }

interface ITranslation {
    ES: IModule,
    EN: IModule,
    FR: IModule,
}

const LANG = 'EN';

const translation: ITranslation = _translation;
export const data = translation[LANG];

export const autor = 'Alberto Alonso';
export const description = 'Web portfolio';

export const translate = <T extends string | string[]> (path:string, module?: IModule, ):T => {
    const keys = path.split('.');
    let current: any = module ?? data;
    for (const key of keys) {
        if (current && typeof current === 'object' && key in current) {
            current = current[key];
        }
        else {
            new Error(`${path}__not_found`);
        }
    }
    return current!;
}

export const url = dev ? 'http://localhost:3000' : 'url'
