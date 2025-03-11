"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const joke = document.getElementById('joke');
const getJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('https://icanhazdadjoke.com/', {
            headers: {
                Accept: 'text/plain',
                'User-Agent': 'joke-generator (https://github.com/alejandrolemamarques/4.-API.git)',
            },
        });
        const data = yield response.text();
        if (joke) {
            joke.textContent = data;
            console.log(data);
        }
    }
    catch (error) {
        console.error('Error fetching joke:', error);
    }
});
// Get the first joke when the page loads
getJoke();
//# sourceMappingURL=index.js.map