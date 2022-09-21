import { config } from "../config"

const fixLanguage = (language: string) => {
    if(!['en', 'ar'].includes(language) ){
        return config.defaultLang
    }
    return language
}

export default fixLanguage