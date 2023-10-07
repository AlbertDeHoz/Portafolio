import translations from '../../lib/translation.json';

export function load({ params }: any) {
    return {
        params,
        translation:translations[params.lang ?? 'EN']
    };
}
