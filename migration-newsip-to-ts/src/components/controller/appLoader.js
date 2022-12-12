import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.up.railway.app/', {
            apiKey: '5dfcb388bf6c4cea863f39310339d47b', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
