paypal.Buttons({
    createOrder: function (data, actions) {
        var amount = document.getElementById('amount').value;
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: amount
                }
            }]
        });
    },
    onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
            alert('thanh toán thành công!');
            // gọi hàm thanh toán
        });
    },
    onError: function (err) {
        showAlert('thanh toán ko thành công!');
        // gọi hàm update status
    }
}).render('#paypal-button-container');