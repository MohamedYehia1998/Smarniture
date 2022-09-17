const fixLanguage = (language: string) => {
    if(!['en', 'ar'].includes(language) ){
        return 'en'
    }
    return language
}

export default fixLanguage