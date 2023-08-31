function processPayment(token) {
    var apiUrl = 'https://api.sandbox.checkout.com/payments';
    var apiKey = 'Bearer sk_sbox_pap5sishsqa65dfybxnrpqfydaz';
  
    var paymentData = {
      source: {
        type: 'token',
        token: token
      },
      amount: 583,
      currency: 'EUR',
      processing_channel_id: 'pc_zs5fqhybzc2e3jmq3efvybybpq',
      reference: 'ORD-50256',
      metadata: {
        udf1: 'TEST123',
        coupon_code: 'NY2018',
        partner_id: 123989
      }
    };
  
    return fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paymentData)
    })
    .then(response => response.json())
    .then(data => {
      return { data, response: JSON.stringify(data) };
    })
    .catch(error => {
      console.error('Error processing payment:', error);
      throw error;
    });
  }
  
 