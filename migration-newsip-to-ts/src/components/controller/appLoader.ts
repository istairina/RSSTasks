import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '5dfcb388bf6c4cea863f39310339d47b', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
