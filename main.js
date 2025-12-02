document.addEventListener('DOMContentLoaded', () => {
    // Функция полузнка
    const inputRange = document.getElementById('products');
    const inputRangeValue = document.getElementById('productsValue');

    inputRange.addEventListener('input', () => {
        inputRangeValue.textContent = inputRange.value;
    });
    // конец ползунка

    // Остальное
    const fullPrice = document.getElementById('fullPrice');

    function calculatorPrice() {
        let total = 0;

        const siteType = document.querySelector('input[name="site-type"]:checked');
        if (siteType?.dataset?.price) {
            total += Number(siteType.dataset.price);
        };

        const daedline = document.querySelector('input[name="deadline"]:checked');
        if (daedline?.dataset?.multiplier) {
            total = total * Number(daedline.dataset.multiplier);
        };

        const features = document.querySelectorAll('input[name="features"]:checked');
        features.forEach(el => {
            if (el?.dataset?.price) {
                total += Number(el.dataset.price);
            };
        });

        const pages = document.querySelector('select[name="pages"] > option:checked');
        if (pages?.dataset?.price) {
            total += Number(pages.dataset.price);
        };

        const products = document.querySelector('#products');
        if (products?.dataset?.pricePer) {
            total += products.value * products.dataset.pricePer / products.step;
        };

        fullPrice.textContent = total.toLocaleString('ru-RU');
    };

    document.querySelectorAll('input, select').forEach(el => {
        el.addEventListener('change', calculatorPrice);
        el.addEventListener('input', calculatorPrice);
    });

    calculatorPrice();
    //
});