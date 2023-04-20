async function fetchData(form, url) {
    const options = {
        method: 'POST',
        body: form
    }
    try {
        const res = await fetch(url, options);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
async function submitter(event){
    event.preventDefault()
    //starts
    const form = new FormData(document.forms['buyer'])
    const url = 'http://localhost:6500/sum'
    const data = await fetchData(form, url)
    //ends
    const x = document.querySelector('.warn')
    x.textContent = data['valu']

}