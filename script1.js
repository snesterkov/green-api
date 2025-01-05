API_URL = 'https://7105.api.greenapi.com'
//mediaUrl = 'https://7105.media.greenapi.com'

const idIns = document.getElementById('idInstance');
const ApiTokenIns = document.getElementById('ApiTokenInstance');
const printResult = document.getElementById('printResult');
const msg = document.getElementById('Message');
const sendFileButtom = document.getElementById('sendFileButtom');
const fileUrl = document.getElementById('fileName');
const phoneMessage = document.getElementById('phoneMessage');
const phoneFile = document.getElementById('phoneFile');


async function sendFileByUrl() {
    const idInstance = idIns.value.trim();
    const ApiTokenInstance = ApiTokenIns.value.trim();
    const fileName = fileUrl.value.trim();
    const phone = phoneFile.value.trim();
    const chatId = phone + '@c.us';
    if (!idInstance) {
        printResult.textContent = 'Введите idInstance! ❌';
        return;
    }
    if (!ApiTokenInstance) {
        printResult.textContent = 'Введите ApiTokenInstance! ❌';
        return;
    }
    if (!phone) {
        printResult.textContent = 'Введите номер телефона! ❌';
        return;
    }
    if (!fileName) {
        printResult.textContent = 'Введите URL располжения файла! ❌';
        return;
    }
    var url = `${API_URL}/waInstance${idInstance}/sendFileByUrl/${ApiTokenInstance}`;
    const jsonPost = {
       chatId: chatId,
       urlFile: fileName,
       fileName: "pic.jpg",
       caption: "Файл"
    };

    // ToDo вынести в функцию
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jsonPost)
        });

        if (!response.ok) {
            throw new Error('Ошибка ⚠');
        }
        const data = await response.json();
        printJSON(data);
    } catch (error) {
        printResult.textContent = 'Ошибка: ' + error.message + ' ❌';
    }
}



async function printJSON(data) {
    printResponse.innerHTML = JSON.stringify(data, null, 2);
}


async function getStateInstance() {
    const idInstance = idIns.value.trim();
    const ApiTokenInstance = ApiTokenIns.value.trim();
    if (!idInstance) {
        printResult.textContent = 'Введите idInstance! ❌';
        return;
    }
    if (!ApiTokenInstance) {
        printResult.textContent = 'Введите ApiTokenInstance! ❌';
        return;
    }
    const url = `${API_URL}/waInstance${idInstance}/getStateInstance/${ApiTokenInstance}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Ошибка ⚠');
        }
        const data = await response.json();
        printJSON(data);
    } catch (error) {
        printResult.textContent = 'Ошибка: ' + error.message + ' ❌';
    }
}

async function getData() {
    var idInstance = idIns.value.trim();
    var ApiTokenInstance = ApiTokenIns.value.trim();

    if (!idInstance) {
        printResult.textContent = 'Введите idInstance! ❌';
        return;
    }
    if (!ApiTokenInstance) {
        printResult.textContent = 'Введите ApiTokenInstance! ❌';
        return;
    }

    try {
        url = `${API_URL}/waInstance${idInstance}/getSettings/${ApiTokenInstance}`;
        response = await fetch(url); 
        if (!response.ok) {
            throw new Error('Ошибка ⚠');
        }
        const data = await response.json();
        printJSON(data);
    } catch (error) {
        printResult.textContent = 'Ошибка: ' + error.message + ' ❌';
    }
}


async function sendMessage() {
    const Message = msg.value.trim();
    const idInstance = idIns.value.trim();
    const ApiTokenInstance = ApiTokenIns.value.trim();
    const phone = phoneMessage.value.trim();
    const chatId = phone + '@c.us';
    if (!idInstance) {
        printResult.textContent = 'Введите idInstance! ❌';
        return;
    }
    if (!ApiTokenInstance) {
        printResult.textContent = 'Введите ApiTokenInstance! ❌';
        return;
    }
    if (!phone) {
        printResult.textContent = 'Введите номер телефона! ❌';
        return;
    }
    if (!Message) {
        printResult.textContent = 'Введите сообщение! ❌';
        return;
    }

    const url = `${API_URL}/waInstance${idInstance}/sendMessage/${ApiTokenInstance}`;
    const jsonPost = {
        message: Message,
        chatId:  chatId
    };
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jsonPost)
        });

        if (!response.ok) {
            throw new Error('Ошибка ⚠');
        }
        const data = await response.json();
        printJSON(data)
    } catch (error) {
        printResult.textContent = 'Ошибка: ' + error.message + ' ❌';
    }

}
